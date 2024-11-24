import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { NotFoundComponent } from '../not-found/not-found.component';

export const routes: Routes = [
    {path:"",component:HomeComponent },
    {path:"about",component:AboutComponent ,title:"About"},
    {path:"portfolio",component:PortfolioComponent ,title:"Portfolio"},
    {path:"contact",component:ContactUsComponent ,title:"Contact"},
    {path:"**",component:NotFoundComponent ,title:"Not-Found"}
];
