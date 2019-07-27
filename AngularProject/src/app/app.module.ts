import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { from } from 'rxjs';
import { CrudserviceService } from './crudservice.service';
import { FormsModule } from '@angular/forms';
import { CrudpostService } from './crudpost.service';
import { CrudupdateService } from './crudupdate.service';
import { CruddeleteService } from './cruddelete.service';
@NgModule({
  declarations: [
    AppComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CrudserviceService,CrudpostService,CrudupdateService,CruddeleteService],
  bootstrap: [PersonDetailsComponent]
})
export class AppModule { }
