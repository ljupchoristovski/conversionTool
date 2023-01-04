import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material.module";
import { HeaderComponent } from "./components/header/header.component";


const sharedComponents = [HeaderComponent];
@NgModule({
    declarations: [...sharedComponents],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [...sharedComponents, HeaderComponent],
})
export class SharedModule {}