import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [InputComponent],
})
export class InputModule {}
