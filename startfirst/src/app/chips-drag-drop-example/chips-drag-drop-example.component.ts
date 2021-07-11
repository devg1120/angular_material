import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

export interface Vegetable {
  name: string;
  }

@Component({
  selector: 'app-chips-drag-drop-example',
  templateUrl: './chips-drag-drop-example.component.html',
  styleUrls: ['./chips-drag-drop-example.component.css']
})
export class ChipsDragDropExampleComponent implements OnInit {

  vegetables: Vegetable[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
