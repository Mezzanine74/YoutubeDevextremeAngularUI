import { Component, OnInit } from '@angular/core';
import {InitializedEvent, ShowingEvent} from 'devextreme/ui/popup';
import PopUp from "devextreme/ui/popup";

@Component({
  selector: 'app-popupgenel',
  templateUrl: './popupgenel.component.html',
  styleUrls: ['./popupgenel.component.css']
})
export class PopupgenelComponent implements OnInit {

  popupInstance: PopUp | undefined;
  popupVisible: boolean = false;
  employee: any = {
    name: 'hasan',
    surname: 'hendek'
  }

  constructor() { }

  popupInitialized(e: InitializedEvent){
    this.popupInstance = e.component;
  }

  popupShowing(e:ShowingEvent){
    //e.cancel = true;
    // this.employee = {
    //   name: 'bill',
    //   surname: 'gates'
    // }
  }

  btn1Click(){
    this.popupVisible = true;
    this.employee = {
      name: 'nimet',
      surname: 'gitti'
    }    
    //this.popupInstance?.show();
  }

  btn2Click(){
    this.popupVisible = true;
    this.employee = {
      name: 'savas',
      surname: 'geldi'
    }

    //this.popupInstance?.show();
  }

  ngOnInit(): void {
  }

}
