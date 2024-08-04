import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent } from './about/about.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Portfolio',
    },
    {
      path: 'about',
      component: AboutComponent,
      title: 'About',
    },
    { path: '**', component: HomeComponent, title: 'Portfolio' }
  ];
  export default routeConfig;