import { NgModule } from "@angular/core";
import { TheaterRepository } from "./theatherRepository";
import { TheaterRestSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";

@NgModule ({
    imports: [HttpClientModule],
    providers: [
        TheaterRepository,
        TheaterRestSource
    ]
})

export class ModelModule {}