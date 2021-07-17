import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-selection-example',
  templateUrl: './list-selection-example.component.html',
  styleUrls: ['./list-selection-example.component.css']
})
export class ListSelectionExampleComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit(): void {
  }

}
