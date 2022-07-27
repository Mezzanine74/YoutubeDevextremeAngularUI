import { Component, OnInit, ViewChild } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";
import { RowUpdatingEvent, InitializedEvent} from 'devextreme/ui/data_grid'
import { ICategory } from 'src/app/core/models/ICategory';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-datagridcrudislemleri',
  templateUrl: './datagridcrudislemleri.component.html',
  styleUrls: ['./datagridcrudislemleri.component.css']
})
export class DatagridcrudislemleriComponent implements OnInit {

  public datasource: DataSource;
  @ViewChild('dataGrid', {static: false}) dataGrid: DxDataGridComponent | undefined;

  constructor(private crudService: CrudService<ICategory>) { 

    let that = this;
    const controllerName = 'category';

    this.datasource = new DataSource({
      store:new CustomStore({
        key: "id",
        load(): any {
          // yeni yontem ile yaptiramadim. ToPromise devre disi birakilabilmeli
          return that.crudService.getList(controllerName).toPromise();
        },
        update(key: number, model: ICategory): Promise<ICategory> {
          let returnModel: ICategory;
          return new Promise<ICategory>((resolve, reject) => {
            that.crudService.updateItem(model, controllerName).subscribe(
              data => {returnModel = data}
            );
            resolve(returnModel);
          });
  
        },
        insert(model: ICategory): Promise<ICategory> {
          let returnModel: ICategory;
          return new Promise<ICategory>((resolve, reject) => {
            that.crudService.insertItem(model, controllerName).subscribe(
              data => {returnModel = data}
            );
            resolve(returnModel);
          });
        },
        remove(key: number): Promise<void> {
          let returnValue: number;
          return new Promise<void>((resolve, reject) => {
            that.crudService.removeItem(key, controllerName).subscribe(
              data => {returnValue = data}
            );
            resolve();
          });
        }
      })
    })

  }

  onRowUpdating(e: RowUpdatingEvent){
    e.newData = {...e.oldData, ...e.newData};
    console.log('options new Data', e.newData);
  }

  helloWorld(){
    console.log('clicked', new Date());
  }

  //categories: any[] = [];  
  //test: any = of([{name: 'Test'}, {name: 'Work'}]);

  ngOnInit(): void {
    // this.crudService.getCategoryList().subscribe(
    //   data => { this.categories = data;}
    // )
  }


}
