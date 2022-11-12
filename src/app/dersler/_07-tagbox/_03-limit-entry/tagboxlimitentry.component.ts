import { Component, OnInit } from '@angular/core';
import { ValueChangedEvent as TagBoxValueChangedEvent } from 'devextreme/ui/tag_box';

@Component({
  selector: 'app-tagboxlimitentry',
  templateUrl: './tagboxlimitentry.component.html',
  styleUrls: ['./tagboxlimitentry.component.css']
})
export class TagboxlimitentryComponent implements OnInit {

  objectProducts: any[];

  constructor() { 
    this.objectProducts = [
      {id:1, categoryName: 'Test1'}, 
      {id:2, categoryName: 'Test2'},
      {id:3, categoryName: 'Test3'},
      {id:4, categoryName: 'Test4'},
    ]
  }

  tagBoxValueChanged(e: TagBoxValueChangedEvent){
    
    let max = 2;
    if(e.value.length > max){
      const newValue = e.value.slice(0, max);
      e.component.option('value', newValue);
    }

  }

  ngOnInit(): void {
  }

}
