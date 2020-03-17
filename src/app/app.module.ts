import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChieldComponent } from './chield/chield.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ViewChieldComponent } from './view-chield/view-chield.component';

import {FormsModule} from "@angular/forms";
import { SubParentComponent } from './sub-parent/sub-parent.component';
import { SubChieldComponent } from './sub-chield/sub-chield.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChieldComponent,
    ViewParentComponent,
    ViewChieldComponent,
    SubParentComponent,
    SubChieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
