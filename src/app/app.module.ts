import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

// ngrx
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// reducers
import { errorReducer } from './shared/reducers/error.reducer';
import { sessionReducer } from './shared/reducers/session.reducer';

// effects
import { SessionEffects } from './shared/effects/session.effects';

// services
import { QuestionService } from './shared/services/question.service';
import { HttpWrapperService } from './shared/services/http-wrapper.service';
import { SessionService } from './shared/services/session.service';

// root component
import { AppComponent } from './app.component';

// routing
import { AppRoutingModule } from './app.routing';

// dumb components
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { NavbarComponent } from './navbar/navbar.component';

// smart components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavbarComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    EffectsModule.run(SessionEffects),
    StoreModule.provideStore({
      error: errorReducer,
      session: sessionReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    HttpWrapperService,
    QuestionService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
