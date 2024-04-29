import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private isMobileSidebarOpenSubject = new BehaviorSubject<boolean>(false);
  isMobileSidebarOpen$ = this.isMobileSidebarOpenSubject.asObservable();

  openMobileSidebar() {
    this.isMobileSidebarOpenSubject.next(true);
  }

  closeMobileSidebar() {
    this.isMobileSidebarOpenSubject.next(false);
  }
}
