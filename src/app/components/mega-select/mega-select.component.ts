import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-mega-select',
  templateUrl: './mega-select.component.html',
  styleUrl: './mega-select.component.css',
})
export class MegaSelectComponent {
  @Input() control: AbstractControl = new FormControl();
  @Input() optionsLists = [];
  @Input() labels: string[] = [];
  @Input() manualOptions: string[] = [];
  @Input() label: string = 'Mega Select';
  @Input() manualSelectedLabel = 'Manually Selected';

  protected selections = new SelectionModel(true, []);

  constructor() {}
}
