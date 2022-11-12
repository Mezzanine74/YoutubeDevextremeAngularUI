import { Component, OnInit } from '@angular/core';
import { ValueChangedEvent as TagBoxValueChangedEvent } from 'devextreme/ui/tag_box';

@Component({
  selector: 'app-tagboxgetremoveditem',
  templateUrl: './tagboxgetremoveditem.component.html',
  styleUrls: ['./tagboxgetremoveditem.component.css']
})
export class TagboxgetremoveditemComponent implements OnInit {
  objectProducts: any[];
  constructor() { 
    this.objectProducts = [
      {id:1, categoryName: 'Test1'}, 
      {id:2, categoryName: 'Test2'},
      {id:3, categoryName: 'Test3'},
      {id:4, categoryName: 'Test4'},
    ]
  }

  tagBoxOnValueChanged(e: TagBoxValueChangedEvent){
    let removedItem = e.previousValue.filter((c:any) => !e.value.includes(c));

    if (removedItem.length){
      console.log( this.objectProducts.find((c:any) => c.id === removedItem[0]) );
    }

  }

  ngOnInit(): void {
  }

}
