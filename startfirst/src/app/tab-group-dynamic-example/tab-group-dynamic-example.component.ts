import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-tab-group-dynamic-example',
  templateUrl: './tab-group-dynamic-example.component.html',
  styleUrls: ['./tab-group-dynamic-example.component.css']
})
export class TabGroupDynamicExampleComponent implements OnInit {

  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
