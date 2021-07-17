import { Component, ViewChild, OnInit } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';


@Component({
  selector: 'app-expansion-expand-collapse-all-example',
  templateUrl: './expansion-expand-collapse-all-example.component.html',
  styleUrls: ['./expansion-expand-collapse-all-example.component.css']
})
export class ExpansionExpandCollapseAllExampleComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}
