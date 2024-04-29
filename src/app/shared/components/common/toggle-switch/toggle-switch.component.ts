import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../../../../interfaces';
import { ToggleView } from '../../../../layouts/actions/layout.actions';
import { getView } from '../../../../layouts/reducers/layout.selector';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.less',
})
export class ToggleSwitchComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}
  currentView: boolean;
  onToggleView(value: boolean): void {
    this.currentView = value;
    this.store.dispatch(new ToggleView(this.currentView));
    localStorage.setItem("toggleView", JSON.stringify(this.currentView))
    const redirectUrl = value ? '' : '/overview-ent';
    this.router.navigate([redirectUrl]);
  }

  ngOnInit(): void {
    const currentView = JSON.parse(localStorage.getItem("toggleView"));
    if(currentView){
      this.currentView = currentView;
      this.store.dispatch(new ToggleView(this.currentView));
    }
  }
}
