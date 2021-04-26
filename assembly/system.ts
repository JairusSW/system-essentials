// JS Bindings
declare function _log(data: string): void

/**
 * System Essentials Namespace
 * Isomorphic System Access for AssemblyScript
 * 
 * Implemented:
 * system.log
 * 
 * Unimplemented:
 * system.time_local
 * system.time_utc
 * system.timezoneoffset
 * system.hrtime
 * system.random
 * 
 * Suggestions:
 * fetch
 * FileSystem
 */

export namespace system {
  export function log(data: string): void {
    _log(data)
  }
}

export function test(): void {
  system.log('Hello, World!')
  //-- Print to the console
}