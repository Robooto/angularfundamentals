import { Injectable } from '@angular/core'

import * as Toastr from 'toastr';

// declare let toastr:any

@Injectable()
export class ToastrService {

    success(message: string, title?: string) {
        Toastr.success(message, title);
    }

    info(message: string, title?: string) {
        Toastr.info(message, title);
    }

    warning(message: string, title?: string) {
        Toastr.warning(message, title);
    }

    error(message: string, title?: string) {
        Toastr.error(message, title);
    }
}