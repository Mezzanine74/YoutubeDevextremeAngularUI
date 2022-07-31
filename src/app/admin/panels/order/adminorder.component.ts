import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { IOrder } from 'src/app/core/models/IOrder';
import { CrudService } from 'src/app/core/services/crud.service';
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";
import { RowUpdatingEvent} from 'devextreme/ui/data_grid'
import { ISelectOption } from 'src/app/core/models/ISelectOption';
import { IEmployee } from 'src/app/core/models/IEmployee';

@Component({
  selector: 'app-adminorder',
  templateUrl: './adminorder.component.html',
  styleUrls: ['./adminorder.component.css']
})
export class AdminorderComponent implements OnInit {

  public datasource: DataSource;
  public customerStore: CustomStore;
  public shipperStore: CustomStore;
  public employeeData: ISelectOption[] = [];

  @ViewChild('dataGrid', {static: false}) dataGrid: DxDataGridComponent | undefined;
  
  constructor(private crudService: CrudService<IOrder>) {  
    
    let that = this;
    const controllerName = 'order';

    this.datasource = new DataSource({
      store:new CustomStore({
        key: "id",
        load(): any {
          // yeni yontem ile yaptiramadim. ToPromise devre disi birakilabilmeli
          return that.crudService.getList(controllerName).toPromise();
        },
        update(key: number, model: IOrder): Promise<IOrder> {
          let returnModel: IOrder;
          return new Promise<IOrder>((resolve, reject) => {
            that.crudService.updateItem(model, controllerName).subscribe(
              data => {returnModel = data}
            );
            resolve(returnModel);
          });
  
        },
        insert(model: IOrder): Promise<IOrder> {
          let returnModel: IOrder;
          return new Promise<IOrder>((resolve, reject) => {
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

    // CUSTOMER DATA SOURCE
    this.customerStore = new CustomStore({
      key: "id",
      loadMode: 'raw',
      load(): any {
        return that.crudService.getList('customer').toPromise();
      },
    })

    // SHIPPER DATA SOURCE
    this.shipperStore = new CustomStore({
      key: "id",
      loadMode: 'raw',
      load(): any {
        return that.crudService.getList('shipper').toPromise();
      },
    })

    // FILL EMPLOYEEID (MAPPING NOT AVAILABLE IN CUSTOMSTORE)
    that.crudService.getList('employee').toPromise().then((data: any) => {
      let itemCollect: ISelectOption[] = [];
      data?.forEach((dataItem:IEmployee) => {
        itemCollect.push({id: dataItem.id, text: dataItem.firstName + " " + dataItem.lastName});
      });
      this.employeeData = itemCollect;
    });
    

    // EMPLOYEE DATA SOURCE
    // this.employeeStore = {
    //   store: new CustomStore({
    //     key: "id",
    //     loadMode: 'raw',
    //     load(): any {
    //       return that.crudService.getList('employee').toPromise();
    //     },
    //   }),
    //   map: (dataItem: any) => {
    //     return {
    //         fullName: dataItem.firstName + " " + dataItem.lastName
    //     }
    //   }
    // }


  }

  onRowUpdating(e: RowUpdatingEvent){
    e.newData = {...e.oldData, ...e.newData};
  }

  ngOnInit(): void {
  }

}
