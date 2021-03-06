import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerRegistrationformComponent } from './customer-registrationform/customer-registrationform.component';
import { RawMaterialComponent } from './raw-material/raw-material.component';
import { DepartmentComponent } from './department/department.component';
import { RoleComponent } from './role/role.component';
import { TypeComponent } from './type/type.component';
import { TableComponent } from './table/table.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRegistrationformComponent,
    RawMaterialComponent,
    DepartmentComponent,
    RoleComponent,
    TypeComponent,
    TableComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
