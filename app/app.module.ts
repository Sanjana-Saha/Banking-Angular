import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SearchService} from './services/SearchService';
import {AdminDecisionService} from './services/AdminDecisionService';
import { FormsModule } from '@angular/forms';
import { SearchComponentComponent } from './search-component/search-component.component';
import { AdminDecisionComponent } from './admin-decision/admin-decision.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    AdminDecisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchService,AdminDecisionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
