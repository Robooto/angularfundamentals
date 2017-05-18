// import { Injectable } from '@angular/core'

// // declare let toastr:any

// @Injectable()
// export class ToastrService {

//     success(message: string, title?: string) {
//         Toastr.success(message, title);
//     }

//     info(message: string, title?: string) {
//         Toastr.info(message, title);
//     }

//     warning(message: string, title?: string) {
//         Toastr.warning(message, title);
//     }

//     error(message: string, title?: string) {
//         Toastr.error(message, title);
//     }
// }

//OpaqueToken used by di registry

import { OpaqueToken } from "@angular/core";

export let TOASTR_TOKEN = new OpaqueToken('toastr');

export interface Toastr {
    success (msg: string, title?: string): void;
    info (msg: string, title?: string): void;
    warning (msg: string, title?: string): void;
    error (msg: string, title?: string): void;
}