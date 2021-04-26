class ImportManager {
    
    constructor() {

        this._exports = null

        this.wasmImports = {
            system: {
                // Systems Imports...
                _log: (message) => {
        
                    console.log(this._exports.__getString(message))
        
                }
            }
        }
    }

    get wasmExports() {
		return this._exports
	}
	set wasmExports(e) {
		this._exports = e
        this._exports.__getString = e.__getString
        this._exports.__newString = e.__newString
        this._exports.__newArray = e.__newArray
        this._exports.__getArray = e.__getArray
	}

	getFn(fnIndex) {
		if (!this.wasmExports)
			throw new Error(
				'Make sure you set .wasmExports after instantiating the Wasm module but before running the Wasm module.',
			)
        if (!this._exports['table']) return () => {}
		return this._exports.table.get(fnIndex)
	}
}

module.exports = ImportManager