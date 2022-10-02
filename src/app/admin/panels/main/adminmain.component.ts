import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router, Event as NavigationEvent, NavigationEnd } from '@angular/router';
import { EnumControllerNames } from 'src/app/core/models/EnumControllerNames';
import { SelectionChangedEvent } from 'devextreme/ui/tabs'
import { ValueChangedEvent } from 'devextreme/ui/select_box'
import { BehaviorSubject } from 'rxjs';
import { DxSelectBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'app-adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.css']
})
export class AdminmainComponent implements OnInit {

  selectedTabIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  selectedTabIndex: number = 0;

  enumControllerNames = EnumControllerNames;

  tabDataSource: string[];
  @ViewChild('selectBox', {static: false}) selectBox: DxSelectBoxComponent | undefined;  

  onSelectBoxValueChanged(event: ValueChangedEvent){
    this.selectedTabIndex$.next(this.tabDataSource.findIndex(c=>c.toString().toLowerCase() === event.value.toString().toLowerCase()));
  }

  onTabSelectionChanged(event: SelectionChangedEvent){
    this.selectedTabIndex$.next(this.tabDataSource.findIndex(c=>c.toString().toLowerCase() === event.addedItems[0].toString().toLowerCase()))
  }

  constructor(private router: Router, private changeDetection: ChangeDetectorRef) { 
    this.tabDataSource = Object.keys(this.enumControllerNames);

    // router subscription in constructor. ngOnInit will be too late
    this.router.events
          .subscribe(
            (event: NavigationEvent) => {
              if(event instanceof NavigationEnd) {
                this.selectedTabIndex$.next(this.tabDataSource.findIndex(c=>c.toString().toLowerCase() === event.url.replace('/admin/panel/','').toString().toLowerCase()));
              }
            });
    
  }
  
  ngOnInit(): void {
    this.selectedTabIndex$.subscribe(data => {
      console.log('next', data);
      this.selectedTabIndex = data;
      this.selectBox?.instance.option('value', this.tabDataSource[data]);
      this.router.navigate(['/admin/panel/' + this.tabDataSource[data].toString().toLowerCase()]); // routing lowercase yapmazsan claismiyor.
    })

  }

}
