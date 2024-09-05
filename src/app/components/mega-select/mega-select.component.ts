import {Component, Input, OnInit} from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';

export interface IOptionsList {
  label: string;
  strings: string[];
}

@Component({
  selector: 'app-mega-select',
  templateUrl: './mega-select.component.html',
  styleUrl: './mega-select.component.css',
})
export class MegaSelectComponent {
  public optionsList: IOptionsList[] = [];
  public manualOptionsList: string[] = [];
  @Input() control: AbstractControl = new FormControl();
  @Input() labels: string[] = [];
  @Input() label: string = 'Mega Select';
  @Input() manualSelectedLabel = 'Manually Selected';

  protected selections = new SelectionModel(true, []);

  constructor() {
  }

  public setOptionsList(options: IOptionsList[]) {
    this.optionsList = options;
  }

  public setManualOptionsList(manualOptions: string[]) {
    this.manualOptionsList = manualOptions;
  }
}
