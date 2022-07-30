import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.css']
})
export class AdminmainComponent implements OnInit {

  longtabs: any[] = [
    { id:1, text: 'customers' },
    { id:2, text: 'orders' },
  ];

  selectTab(event: any){
    console.log(event);
    this.adminService.sendPanel$.next(event.itemData);

    // if (event.itemData.id === 1){
    //   this.router.navigate(['/admin/panel/customer']);
    // } else if (event.itemData.id === 2){
    //   this.router.navigate(['/admin/panel/order']);
    // }

  }

  sendTime(){
    let newDate = new Date();
    console.log('clicked', newDate)
    this.adminService.sendTime$.next(newDate);
  }

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

}
