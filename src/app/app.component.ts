import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { InputModule } from "./shared/components/input/input.module";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputModule, ReactiveFormsModule, FormsModule],
  template: `
    <form [formGroup]="formGroup" (submit)="submit()">
      <app-input label="E-mail" controlName="email" placeholder="email@email.com" />
      <app-input label="Senha" type="password" controlName="password" placeholder="******" />
      <button type="submit">Enviar</button>
    </form>
  `,
  styles: [],
})
export class AppComponent {
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  public submit(): void {
    console.log(this.formGroup.value);
  }
}
