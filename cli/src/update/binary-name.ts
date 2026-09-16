/**
 * Cross-platform executable name for the installed evot binary.
 *
 * The release artifact is a Bun-compiled single executable. On Unix it is a
 * shell launcher named `evot`; on Windows the self-update flow works with a
 * real PE executable (`evot.exe`) rather than a sh shim. Using an explicit
 * `.exe` suffix here keeps spawn/exec lookups honest on win32, where PATHEXT
 * resolution is otherwise required.
 */
import { join } from 'path'

/** `evot` on Unix, `evot.exe` on Windows. */
export function binaryName(): string {
  return process.platform === 'win32' ? 'evot.exe' : 'evot'
}

/** Absolute path to the installed evot binary inside `binDir`. */
export function binaryPath(binDir: string): string {
  return join(binDir, binaryName())
}
