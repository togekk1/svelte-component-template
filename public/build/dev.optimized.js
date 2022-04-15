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
    data: {
      // src/assembly/dev/dev/data: ~lib/staticarray/StaticArray<src/assembly/dev/dev/Data> | null
      valueOf() { return this.value; },
      get value() {
        return __liftStaticArray(pointer => __liftRecord3(new Uint32Array(memory.buffer)[pointer >>> 2]), 2, exports.data.value >>> 0);
      },
      set value(value) {
        exports.data.value = __lowerStaticArray((pointer, value) => { new Uint32Array(memory.buffer)[pointer >>> 2] = __lowerRecord3(value) || __notnull(); }, 5, 2, value);
      }
    },
  }, exports);
  function __liftRecord3(pointer) {
    // src/assembly/dev/dev/Data
    // Hint: Opt-out from lifting as a record by providing an empty constructor
    if (!pointer) return null;
    return {
      fileName: __liftString(new Uint32Array(memory.buffer)[pointer + 0 >>> 2]),
      rawPath: __liftString(new Uint32Array(memory.buffer)[pointer + 4 >>> 2]),
      isFolder: new Uint8Array(memory.buffer)[pointer + 8 >>> 0] != 0,
      lastModified: new BigInt64Array(memory.buffer)[pointer + 16 >>> 3],
      size: __liftString(new Uint32Array(memory.buffer)[pointer + 24 >>> 2]),
      tags: __liftStaticArray(pointer => __liftString(new Uint32Array(memory.buffer)[pointer >>> 2]), 2, new Uint32Array(memory.buffer)[pointer + 28 >>> 2]),
    };
  }
  function __lowerRecord3(value) {
    // src/assembly/dev/dev/Data
    // Hint: Opt-out from lowering as a record by providing an empty constructor
    if (value == null) return 0;
    const pointer = exports.__pin(exports.__new(32, 3));
    new Uint32Array(memory.buffer)[pointer + 0 >>> 2] = __lowerString(value.fileName) || __notnull();
    new Uint32Array(memory.buffer)[pointer + 4 >>> 2] = __lowerString(value.rawPath) || __notnull();
    new Uint8Array(memory.buffer)[pointer + 8 >>> 0] = value.isFolder ? 1 : 0;
    new BigInt64Array(memory.buffer)[pointer + 16 >>> 3] = value.lastModified || 0n;
    new Uint32Array(memory.buffer)[pointer + 24 >>> 2] = __lowerString(value.size) || __notnull();
    new Uint32Array(memory.buffer)[pointer + 28 >>> 2] = __lowerStaticArray((pointer, value) => { new Uint32Array(memory.buffer)[pointer >>> 2] = __lowerString(value) || __notnull(); }, 4, 2, value.tags) || __notnull();
    exports.__unpin(pointer);
    return pointer;
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
  function __lowerString(value) {
    if (value == null) return 0;
    const
      length = value.length,
      pointer = exports.__new(length << 1, 1) >>> 0,
      memoryU16 = new Uint16Array(memory.buffer);
    for (let i = 0; i < length; ++i) memoryU16[(pointer >>> 1) + i] = value.charCodeAt(i);
    return pointer;
  }
  function __liftStaticArray(liftElement, align, pointer) {
    if (!pointer) return null;
    const
      length = new Uint32Array(memory.buffer)[pointer - 4 >>> 2] >>> align,
      values = new Array(length);
    for (let i = 0; i < length; ++i) values[i] = liftElement(pointer + (i << align >>> 0));
    return values;
  }
  function __lowerStaticArray(lowerElement, id, align, values) {
    if (values == null) return 0;
    const
      length = values.length,
      buffer = exports.__pin(exports.__new(length << align, id)) >>> 0;
    for (let i = 0; i < length; i++) lowerElement(buffer + (i << align >>> 0), values[i]);
    exports.__unpin(buffer);
    return buffer;
  }
  function __notnull() {
    throw TypeError("value must not be null");
  }
  return adaptedExports;
}
export const {
  data,
  sort
} = await (async url => instantiate(
  await (
    typeof globalThis.fetch === "function"
      ? WebAssembly.compileStreaming(globalThis.fetch(url))
      : WebAssembly.compile(await (await import("fs/promises")).readFile(url))
  ), {
  }
))(new URL("dev.optimized.wasm", import.meta.url));
