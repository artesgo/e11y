import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { E11yModule } from "@artesgo/e11y";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [ BrowserModule, E11yModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
