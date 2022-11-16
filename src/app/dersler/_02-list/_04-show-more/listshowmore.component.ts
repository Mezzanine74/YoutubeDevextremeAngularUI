import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { ICategory } from 'src/app/core/models/ICategory';
import { CrudService } from 'src/app/core/services/crud.service';
import DxList from "devextreme/ui/list";
import { InitializedEvent, ItemRenderedEvent } from 'devextreme/ui/list';
import { ICustomer } from 'src/app/core/models/ICustomer';

@Component({
  selector: 'app-listshowmore',
  templateUrl: './listshowmore.component.html',
  styleUrls: ['./listshowmore.component.css']
})
export class ListshowmoreComponent implements OnInit {

  listInstance: DxList | undefined;
  listDataSource: any;

  constructor(private crudService: CrudService<ICustomer>) { 
    let that = this;
    this.listDataSource = new DataSource({
      pageSize: 10,
      store: new CustomStore({
        key:"id",
        loadMode: "raw",
        load(): any{
          return that.crudService.getList('customer').toPromise();
        }
      })
    })

  }

  onListItemRendered(e:ItemRenderedEvent){
    //console.log(e);
    if (e.itemData?.companyName === 'Alfreds Futterkiste'){
      e.itemElement.style.setProperty('pointer-events', 'none');
    }
    
  }

  onListInitialized(e:InitializedEvent){
    this.listInstance = e.component;
  }

  ngOnInit(): void {
  }

}
