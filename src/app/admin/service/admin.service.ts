import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AdminService {

  sendTime$ = new BehaviorSubject(new Date());
  sendPanel$ = new BehaviorSubject({});

  constructor() { }
}
