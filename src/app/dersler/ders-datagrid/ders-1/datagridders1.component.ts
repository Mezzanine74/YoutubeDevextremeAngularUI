import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";
import { RowUpdatingEvent} from 'devextreme/ui/data_grid'
import { ICategory } from 'src/app/core/models/ICategory';

@Component({
  selector: 'app-datagridders1',
  templateUrl: './datagridders1.component.html',
  styleUrls: ['./datagridders1.component.css']
})
export class Datagridders1Component implements OnInit {

  datasource2: DataSource;

  constructor(private dataService: CrudService<ICategory>) { 

    let that = this;
    const controllerName = 'category';

    this.datasource2 = new DataSource({
      store:new CustomStore({
        key: "id",
        load(): any {
          // yeni yontem ile yaptiramadim. ToPromise devre disi birakilabilmeli
          return that.dataService.getList(controllerName).toPromise();
        },
        update(key: number, model: ICategory): Promise<ICategory> {
          let returnModel: ICategory;
          return new Promise<ICategory>((resolve, reject) => {
            that.dataService.updateItem(model, controllerName).subscribe(
              data => {returnModel = data}
            );
            resolve(returnModel);
          });
  
        },
        insert(model: ICategory): Promise<ICategory> {
          let returnModel: ICategory;
          return new Promise<ICategory>((resolve, reject) => {
            that.dataService.insertItem(model, controllerName).subscribe(
              data => {returnModel = data}
            );
            resolve(returnModel);
          });
        },
        remove(key: number): Promise<void> {
          let returnValue: number;
          return new Promise<void>((resolve, reject) => {
            that.dataService.removeItem(key, controllerName).subscribe(
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
    // this.dataService.getCategoryList().subscribe(
    //   data => { this.categories = data;}
    // )
  }

}
