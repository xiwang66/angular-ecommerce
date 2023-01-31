import {FormControl, ValidationErrors} from "@angular/forms";

export class SprintShopValidators {

  // whitespace validation
  static notOnlyWhitespace(control: FormControl) : ValidationErrors | null {

    // check if string only contains whitespace
    if ((control.value != null) && (control.value.trim().length === 0)) {

      // invalid then return error object
      return {'notOnlyWhitespace': true};
    } else {
      // valid then return null
      return null;
    }
  }

}
