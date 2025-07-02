import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import {  NavbarComponent } from './core/navbar/navbar.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ButtonComponent } from './shared/button/button.component';
import { LandingComponent} from './pages/landing/landing.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, LandingComponent, AboutComponent, ProjectsComponent, ButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio-workshop';
}
