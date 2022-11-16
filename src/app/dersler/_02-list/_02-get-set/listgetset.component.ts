import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { ICategory } from 'src/app/core/models/ICategory';
import { CrudService } from 'src/app/core/services/crud.service';
import DxList from "devextreme/ui/list";
import { InitializedEvent} from 'devextreme/ui/list';

@Component({
  selector: 'app-listgetset',
  templateUrl: './listgetset.component.html',
  styleUrls: ['./listgetset.component.css']
})
export class ListgetsetComponent implements OnInit {

  listInstance: DxList | undefined;
  listDataSource: any;

  constructor(private crudService: CrudService<ICategory>) { 
    let that = this;
    this.listDataSource = new DataSource({
      store: new CustomStore({
        key:"id",
        loadMode: "raw",
        load(): any{
          return that.crudService.getList('category').toPromise();
        }
      })
    })

  }

  onListInitialized(e:InitializedEvent){
    this.listInstance = e.component;
  }

  ngOnInit(): void {
  }

}
