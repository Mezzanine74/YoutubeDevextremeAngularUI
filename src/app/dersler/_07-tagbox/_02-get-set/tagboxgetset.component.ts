import { Component, OnInit } from '@angular/core';
import TagBox from "devextreme/ui/tag_box";
import { InitializedEvent as TagBoxInitializedEvent} from 'devextreme/ui/tag_box';

@Component({
  selector: 'app-tagboxgetset',
  templateUrl: './tagboxgetset.component.html',
  styleUrls: ['./tagboxgetset.component.css']
})
export class TagboxgetsetComponent implements OnInit {

  objectProducts: any[];
  tagBoxCategory: TagBox | undefined;

  constructor() { 
    this.objectProducts = [
      {id:1, categoryName: 'Test1'}, 
      {id:2, categoryName: 'Test2'},
      {id:3, categoryName: 'Test3'},
      {id:4, categoryName: 'Test4'},
    ]

  }

  tagBoxInitialized(e: TagBoxInitializedEvent){
    this.tagBoxCategory = e.component;
    console.log('>>>>>', this.tagBoxCategory);

    this.tagBoxCategory?.option('value', [1,2]);

  }

  ngOnInit(): void {
  }

}
