import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './pages/about/about';
import { Navbar } from './core/navbar/navbar';
import { Projects } from './pages/projects/projects';
import { Button } from './shared/button/button';
import {Landing} from './pages/landing/landing';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Landing, About, Projects, Button],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'portfolio-workshop';
}
