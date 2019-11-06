import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { E11yModule } from "@artesgo/e11y";

import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    E11yModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
