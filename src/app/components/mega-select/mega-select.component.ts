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

  protected selections = new SelectionModel<string>(true, []);
  protected addOtherFormControl = new FormControl('');

  constructor() {
    this.selections.changed.subscribe(_ => {
      this.selections.sort();
      this.control.setValue(this.selections.selected.join(', '));
    })
  }

  public setOptionsList(options: IOptionsList[]) {
    this.optionsList = options;
  }

  public setManualOptionsList(manualOptions: string[]) {
    this.manualOptionsList = manualOptions;
  }

  public selectAll(): void {
    if(this.isAllSelected()) {
      this.selections.clear();
    } else {
      this.selections.select(...this.manualOptionsList, ...this.optionsList.flatMap((option: IOptionsList) => option.strings));
    }
  }

  public isAllSelected(): boolean {
    return this.selections.selected.length === (this.manualOptionsList.length + this.optionsList.flatMap((option: IOptionsList) => option.strings).length)
  }

  addOtherManualOption() {
    if(!!this.addOtherFormControl.value) {
      this.manualOptionsList.push(this.addOtherFormControl.value);
      this.addOtherFormControl.setValue('');
    }
  }
}
