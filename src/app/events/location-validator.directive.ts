import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS,ValidationErrors } from "@angular/forms";

@Directive({
     selector: '[validateLocation]',
     providers: [{
         provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true //adding a validator to angulars list of services
     }]
})
export class LocationValidator implements Validator {
    constructor() { }

    validate(formGroup: FormGroup): ValidationErrors {
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        if((addressControl && addressControl.value && cityControl && 
        cityControl.value && countryControl && countryControl.value ) || (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        } else {
            return { validateLocation: false }
        }
    }

    registerOnValidatorChange(fn: () => void): void {
        console.log('validator changed');
    }
}