import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  optionStrings = [
    ['Pizza', 'Spaghetti', 'Chicken Nuggets'],
    ['Cat', 'Dog', 'Rabbit'],
  ];

  control = new FormControl('');

  manualOptions = ['🌶️', '🥇', 'true or 1=1'];
  label = 'My new mega select';
  manualSelectedLabel = 'Miscellaneous';
}
