import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'about',
      component: AboutComponent,
      title: 'About Page',
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
  ];
  export default routeConfig;