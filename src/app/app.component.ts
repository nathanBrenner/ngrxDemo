import { Component } from '@angular/core';
import { Store } from '@ngrx/store'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  session$;

  constructor(private _store: Store<any>){
    this.session$ = _store.select('session');
  }

  onSignOut(){
    // todo
  }

}
