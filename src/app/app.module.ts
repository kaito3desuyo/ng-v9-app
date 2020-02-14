import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TestingLibModule } from "testing-lib";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TestingLibModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
