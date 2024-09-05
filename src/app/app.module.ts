import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MegaSelectComponent } from './components/mega-select/mega-select.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MegaSelectComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [MegaSelectComponent]
})
export class AppModule {}
