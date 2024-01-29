import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import { ControlError } from "../../models/control-error.model";

@Component({
  template: "",
})
export abstract class FormControlComponent implements OnInit {
  @Input() public label!: string;
  @Input() public placeholder: string = "";
  @Input() public controlName!: string;

  public formGroupRef!: FormGroup;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit(): void {
    this.getFormGroupRef();
  }

  private getFormGroupRef(): void {
    const ref = this.formGroupDirective.form;
    if (!ref || !this.controlName) throw "formGroupRef or controlName not found";
    this.formGroupRef = ref;
  }

  public hasErrors(): boolean {
    return this.formGroupRef.controls[this.controlName].touched || this.formGroupDirective.submitted;
  }

  public getErrorMessage(): string {
    const errors: ControlError = {
      required: "O campo é obrigatório",
      email: "O e-mail informado não é válido",
      default: "Campo inválido",
    };

    const controlErrors = this.formGroupRef.get(this.controlName)?.errors;
    if (!controlErrors) return "";

    const firstError = Object.keys(controlErrors!)[0];

    let error: string = errors[firstError];
    if (!error) error = errors["default"];

    return error;
  }
}
