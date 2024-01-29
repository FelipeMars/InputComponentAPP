import { Component, Input } from "@angular/core";
import { FormControlComponent } from "../common/form-control.component";
import { FormGroupDirective } from "@angular/forms";

@Component({
  selector: "app-input",
  template: `
    @if (formGroupRef) {
    <div [formGroup]="formGroupRef">
      <label>{{ label }}</label>
      <input [type]="type" [formControlName]="controlName" [placeholder]="placeholder" />

      @if(hasErrors()) {
      <p>{{ getErrorMessage() }}</p>
      }
    </div>
    }
  `,
  styles: ``,
})
export class InputComponent extends FormControlComponent {
  @Input() public type: "text" | "password" = "text";

  constructor(formGroupDirective: FormGroupDirective) {
    super(formGroupDirective);
  }
}
