const fs = require("fs");

const loader = require("@assemblyscript/loader");

const SystemImports = require('./imports')

// Import System
const system = new SystemImports()

const imports = {
    ...system.wasmImports
};

const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);

system.wasmExports = wasmModule.exports

module.exports = wasmModule.exports;

// Test

wasmModule.exports.test()