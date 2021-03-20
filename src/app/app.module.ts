import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeSaveComponent} from './employee-save/employee-save.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeServiceService} from './services/employee-service.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSaveComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
