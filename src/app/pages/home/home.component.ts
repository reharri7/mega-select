import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import {IOptionsList, MegaSelectComponent} from "../../components/mega-select/mega-select.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('megaSelectComponent', {static: false})
  private megaSelectComponent: MegaSelectComponent | undefined;
  optionStrings: IOptionsList[] = [
    {
      label: 'Food',
      strings: ['Pizza', 'Spaghetti', 'Chicken Nuggets'],
    },
    {
      label: 'Animals',
      strings: ['Cat', 'Dog', 'Rabbit'],
    }

  ];

  control = new FormControl('');

  manualOptions = ['🌶️', '🥇', 'true or 1=1'];
  label = 'My new mega select';
  manualSelectedLabel = 'Miscellaneous';

  ngAfterViewInit(): void {
    if(this.megaSelectComponent) {
      this.megaSelectComponent.setOptionsList(this.optionStrings);
      this.megaSelectComponent.setManualOptionsList(this.manualOptions);
    }
  }
}
