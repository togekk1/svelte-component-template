async function instantiate(module, imports = {}) {
  const adaptedImports = {
    env: Object.assign(Object.create(globalThis), imports.env || {}, {
      abort(message, fileName, lineNumber, columnNumber) {
        // ~lib/builtins/abort(~lib/string/String | null?, ~lib/string/String | null?, u32?, u32?) => void
        message = __liftString(message >>> 0);
        fileName = __liftString(fileName >>> 0);
        lineNumber = lineNumber >>> 0;
        columnNumber = columnNumber >>> 0;
        (() => {
          // @external.js
          throw Error(`${message} in ${fileName}:${lineNumber}:${columnNumber}`);
        })();
      },
    }),
  };
  const { exports } = await WebAssembly.instantiate(module, adaptedImports);
  const memory = exports.memory || imports.env.memory;
  const adaptedExports = Object.setPrototypeOf({
    i18n: {
      // src/assembly/i18n/ts/zh-CN/i18n: src/assembly/i18n/ts/zh-CN/I18n
      valueOf() { return this.value; },
      get value() {
        return __liftRecord3(exports.i18n.value >>> 0);
      }
    },
  }, exports);
  function __liftRecord3(pointer) {
    // src/assembly/i18n/ts/zh-CN/I18n
    // Hint: Opt-out from lifting as a record by providing an empty constructor
    if (!pointer) return null;
    return {
      HELLO_WORLD: __liftString(new Uint32Array(memory.buffer)[pointer + 0 >>> 2]),
      E404: __liftString(new Uint32Array(memory.buffer)[pointer + 4 >>> 2]),
      E500: __liftString(new Uint32Array(memory.buffer)[pointer + 8 >>> 2]),
      E502: __liftString(new Uint32Array(memory.buffer)[pointer + 12 >>> 2]),
      E503: __liftString(new Uint32Array(memory.buffer)[pointer + 16 >>> 2]),
      E504: __liftString(new Uint32Array(memory.buffer)[pointer + 20 >>> 2]),
    };
  }
  function __liftString(pointer) {
    if (!pointer) return null;
    const
      end = pointer + new Uint32Array(memory.buffer)[pointer - 4 >>> 2] >>> 1,
      memoryU16 = new Uint16Array(memory.buffer);
    let
      start = pointer >>> 1,
      string = "";
    while (end - start > 1024) string += String.fromCharCode(...memoryU16.subarray(start, start += 1024));
    return string + String.fromCharCode(...memoryU16.subarray(start, end));
  }
  return adaptedExports;
}
export const {
  i18n
} = await (async url => instantiate(
  await (
    typeof globalThis.fetch === "function"
      ? WebAssembly.compileStreaming(globalThis.fetch(url))
      : WebAssembly.compile(await (await import("fs/promises")).readFile(url))
  ), {
  }
))(new URL("zh-CN.optimized.wasm", import.meta.url));
