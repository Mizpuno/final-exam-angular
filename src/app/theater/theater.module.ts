import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { TheaterComponent } from "./theater.component";
import { CheckoutComponent } from "../checkout/checkout.component";
import { FooterComponent } from "../footer/footer.component";

@NgModule({
    imports: [ModelModule, BrowserModule],
    declarations: 
    [
        TheaterComponent,
        CheckoutComponent,
        FooterComponent,
    ],
    exports: [
        TheaterComponent,
        CheckoutComponent,
        FooterComponent,
    ]
})

export class TheaterModule {}