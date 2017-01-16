import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// ngrx
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// reducers
import { sessionReducer } from './shared/reducers/session.reducer';

// root component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    StoreModule.provideStore({
      session: sessionReducer
    }),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
