import { Component, OnInit } from '@angular/core';
import { LoadOptions } from 'devextreme/data';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { ICustomer } from 'src/app/core/models/ICustomer';
import { CrudService } from 'src/app/core/services/crud.service';

@Component({
  selector: 'app-selectboxgenel',
  templateUrl: './selectboxgenel.component.html',
  styleUrls: ['./selectboxgenel.component.css']
})
export class SelectboxgenelComponent implements OnInit {

  dataSource: any;

  constructor(private crudService: CrudService<ICustomer>) { 
    let that = this;
    this.dataSource = new DataSource({
      pageSize:2,
      store: new CustomStore({
        key: 'id',
        //loadMode: 'raw',
        load(loadOptions: LoadOptions): any {
          console.log(loadOptions);
          //return that.crudService.getList('customer').toPromise();
          return that.crudService.search('customer/SearchCustomersByCompanyName', loadOptions).toPromise();
        }
      })
    })
  }

  ngOnInit(): void {
  }

}
