import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPageComponent } from './test-page/test-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TestPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [TestPageComponent]
})
export class TestModModule { }
