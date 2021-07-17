import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-single-selection-example',
  templateUrl: './list-single-selection-example.component.html',
  styleUrls: ['./list-single-selection-example.component.css']
})
export class ListSingleSelectionExampleComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit(): void {
  }

}
