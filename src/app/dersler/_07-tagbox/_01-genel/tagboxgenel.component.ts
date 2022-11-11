import { Component, OnInit } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { ICategory } from 'src/app/core/models/ICategory';
import { CrudService } from 'src/app/core/services/crud.service';

@Component({
  selector: 'app-tagboxgenel',
  templateUrl: './tagboxgenel.component.html',
  styleUrls: ['./tagboxgenel.component.css']
})
export class TagboxgenelComponent implements OnInit {

  simpleProducts: string[];
  objectProducts: any[];
  dataSourceArray: DataSource;
  dataSourceApi: DataSource;
  arrayStore: ArrayStore;

  constructor(private crudService: CrudService<ICategory>) { 
    let that = this;
    this.simpleProducts = [
      'HD Video Player',
      'SuperHD Video Player',
      'SuperPlasma 50',
      'SuperLED 50',
      'SuperLED 42',
      'SuperLCD 55',
      'SuperLCD 42',
      'SuperPlasma 65',
      'SuperLCD 70',
      'Projector Plus',
      'Projector PlusHT',
      'ExcelRemote IR',
      'ExcelRemote Bluetooth',
      'ExcelRemote IP',
    ];

    this.objectProducts = [{id: 1, categoryName: 'Test1'}, {id:2, categoryName: 'Test2'}];

    this.arrayStore = new ArrayStore({
      data: this.objectProducts
    })

    this.dataSourceArray = new DataSource({
      store:new ArrayStore({
        data: this.objectProducts
      })
    })

    this.dataSourceApi = new DataSource({
      store:new CustomStore({
        key: "id",
        loadMode: 'raw',
        load(): any{
          return that.crudService.getList('category').toPromise();
        }
      })
    })


  }

  ngOnInit(): void {
  }

}
