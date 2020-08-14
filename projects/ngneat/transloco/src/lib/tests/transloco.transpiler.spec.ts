import {
  DefaultTranspiler,
  FunctionalTranspiler,
  getFunctionArgs,
  RegExTranspiler,
  TranslocoTranspiler
} from '../transloco.transpiler';
import { flatten } from '../helpers';
import { transpilerFunctions } from './transloco.mocks';

const defaultMatchTokens = {
  start: '{{',
  end: '}}'
};

describe('TranslocoTranspiler', () => {
  describe('DefaultTranspiler', () => {
    testDefaultBehaviour(new DefaultTranspiler());
  });

  describe('FunctionalTranspiler', () => {
    const injectorMock = { get: key => transpilerFunctions[key] };
    const parser = new FunctionalTranspiler(injectorMock);
    testDefaultBehaviour(parser);

    it('should call the correct function', () => {
      const parsed = parser.transpile('[[ upperCase(lowercase) ]]', {}, {});
      expect(parsed).toEqual('LOWERCASE');
    });

    it('should pass the function params', () => {
      const spy = spyOn(transpilerFunctions['upperCase'], 'transpile');
      parser.transpile('[[ upperCase(lowercase) ]]', {}, {});
      expect(spy).toHaveBeenCalledWith('lowercase');
      spy.calls.reset();
      parser.transpile('[[ upperCase(lowercase, another one, many more) ]]', {}, {});
      expect(spy).toHaveBeenCalledWith('lowercase', 'another one', 'many more');
    });

    it('should work with interpolation params', () => {
      const parsed = parser.transpile(
        '[[ testParams(and {{anotherParson}}) ]]',
        { person: 'Shahar', anotherParson: 'Netanel' },
        {}
      );
      expect(parsed).toEqual('Hello Shahar and Netanel');
    });

    it('should work with keys reference', () => {
      const parsed = parser.transpile('[[ testKeyReference() ]]', {}, { fromList: 'Hello' });
      expect(parsed).toEqual('Hello');
    });

    it('should handle a param that includes a comma', () => {
      const parsed = parser.transpile('[[ returnSecondParam(noop, one\\, two, noop) ]]', {}, {});
      expect(parsed).toEqual('one, two');
    });

    describe('getFunctionArgs', () => {
      it('should return an empty array', () => {
        const rawArgs = '';
        expect(getFunctionArgs(rawArgs)).toEqual([]);
      });

      it('should split the string by a comma and remove extra spaces', () => {
        const rawArgs = ',one,    two, three, ,four and five';
        expect(getFunctionArgs(rawArgs)).toEqual(['', 'one', 'two', 'three', '', 'four and five']);
      });

      it('should handle an escaped comma', () => {
        const rawArgs = `Hi there\\, how are you?,   I'm ok`;
        expect(getFunctionArgs(rawArgs)).toEqual(['Hi there, how are you?', `I'm ok`]);
      });
    });
  });

  describe('RegExTranspiler', () => {
    const singleCurlyBraceTranspiler = new RegExTranspiler(/{(.*?)}/g);
    testDefaultBehaviour(singleCurlyBraceTranspiler, { start: '{', end: '}' });

    const tripleAngleBracketTranspiler = new RegExTranspiler(/<<<(.*?)>>>/g);
    testDefaultBehaviour(tripleAngleBracketTranspiler, { start: '<<<', end: '>>>' });
  });

  function testDefaultBehaviour(parser: TranslocoTranspiler, matchTokens = defaultMatchTokens) {
    it('should translate simple string from params', () => {
      const parsed = parser.transpile(`Hello ${matchTokens.start} value ${matchTokens.end}`, { value: 'World' }, {});
      expect(parsed).toEqual('Hello World');
    });

    it('should translate simple string with multiple params', () => {
      const parsed = parser.transpile(
        `Hello ${matchTokens.start} from ${matchTokens.end} ${matchTokens.start} name ${matchTokens.end}`,
        { name: 'Transloco', from: 'from' },
        {}
      );
      expect(parsed).toEqual('Hello from Transloco');
    });

    it('should translate simple string with a key from lang', () => {
      const parsed = parser.transpile(
        `Hello ${matchTokens.start} world ${matchTokens.end}`,
        {},
        flatten({ world: 'World' })
      );
      expect(parsed).toEqual('Hello World');
    });

    it('should translate simple string multiple keys from lang', () => {
      const lang = flatten({
        withKeys: 'with keys',
        from: 'from',
        lang: 'lang',
        nes: { ted: 'supporting nested values!' }
      });
      const parsed = parser.transpile(
        `Hello ${matchTokens.start} withKeys ${matchTokens.end} ${matchTokens.start} from ${matchTokens.end} ${matchTokens.start} lang ${matchTokens.end} ${matchTokens.start}nes.ted${matchTokens.end}`,
        {},
        lang
      );
      expect(parsed).toEqual('Hello with keys from lang supporting nested values!');
    });

    it('should translate simple string with from lang with nested params', () => {
      const lang = flatten({
        dear: `dear ${matchTokens.start}name${matchTokens.end}`,
        hello: `Hello ${matchTokens.start}dear${matchTokens.end}`
      });
      const parsed = parser.transpile(`${matchTokens.start} hello ${matchTokens.end}`, { name: 'world' }, lang);
      expect(parsed).toEqual('Hello dear world');
    });

    it('should translate simple string with params and from lang', () => {
      const parsed = parser.transpile(
        `Hello ${matchTokens.start} from ${matchTokens.end} ${matchTokens.start} name ${matchTokens.end}`,
        { name: 'Transloco' },
        flatten({ from: 'from' })
      );
      expect(parsed).toEqual('Hello from Transloco');
    });

    it('should translate simple string with params and from lang with params', () => {
      const lang = flatten({
        hello: `Hello ${matchTokens.start}name${matchTokens.end}`
      });
      const parsed = parser.transpile(
        `${matchTokens.start} hello ${matchTokens.end}, good ${matchTokens.start} timeOfDay ${matchTokens.end}`,
        { name: 'world', timeOfDay: 'morning' },
        lang
      );
      expect(parsed).toEqual('Hello world, good morning');
    });

    it('should return the given value when the value is falsy', () => {
      expect(parser.transpile('', {}, {})).toEqual('');
      expect(parser.transpile(null, {}, {})).toEqual(null);
      expect(parser.transpile(undefined, {}, {})).toEqual(undefined);
    });

    describe('Objects', () => {
      const translation = {
        a: 'Hello',
        j: {
          r: `Hey ${matchTokens.start}value${matchTokens.end}`
        },
        b: {
          flat: `Flat ${matchTokens.start} dynamic ${matchTokens.end}`,
          c: {
            otherKey: 'otherKey',
            d: `Hello ${matchTokens.start}value${matchTokens.end}`
          },
          g: {
            h: `Name ${matchTokens.start} name ${matchTokens.end}`
          }
        }
      };

      it('should support objects', () => {
        expect(parser.transpile(translation.b, null, {})).toEqual(translation.b);
      });

      it('should support params', () => {
        expect(
          parser.transpile(
            translation.b,
            {
              'c.d': { value: 'World' },
              'g.h': { name: 'Transloco' },
              flat: { dynamic: 'HOLA' }
            },
            {}
          )
        ).toEqual({
          flat: 'Flat HOLA',
          c: {
            otherKey: 'otherKey',
            d: 'Hello World'
          },
          g: {
            h: 'Name Transloco'
          }
        });

        expect(
          parser.transpile(
            translation.j,
            {
              r: { value: 'Transloco' }
            },
            {}
          )
        ).toEqual({
          r: 'Hey Transloco'
        });

        expect(
          parser.transpile(
            translation.b.c,
            {
              d: { value: 'Transloco' }
            },
            {}
          )
        ).toEqual({
          otherKey: 'otherKey',
          d: 'Hello Transloco'
        });
      });
    });
  }
});
