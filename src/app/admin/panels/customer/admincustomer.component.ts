import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-admincustomer',
  templateUrl: './admincustomer.component.html',
  styleUrls: ['./admincustomer.component.css']
})
export class AdmincustomerComponent implements OnInit {

  timeNow: Date = new Date();
  panel$: any;

  constructor(private adminService: AdminService) { 
    this.panel$ = this.adminService.sendPanel$;
  }

  ngOnInit(): void {
    this.adminService.sendTime$.subscribe(
      data => {
        console.log('subscription works', data);
        this.timeNow = data}
    )
  }

}
