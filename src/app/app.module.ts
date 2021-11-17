import { NgModule, Injectable} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgRedux, NgReduxModule} from '@angular-redux/store';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ResultViewComponent } from './result-view/result-view.component';
import { IappState, rootReducer, INIT_STATE } from './redux/store';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ResultViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IappState>) {
    ngRedux.configureStore(rootReducer, INIT_STATE)
  }
}
