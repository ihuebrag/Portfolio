import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
    { path: '', component: AppComponent, title: 'Home Page'},
    { path: 'about', component: AboutComponent, title: 'About Page'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}