import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { TopNavbarComponent } from "../../shared/components/top-navbar/top-navbar.component";
import { MainNavbarComponent } from "../../shared/components/main-navbar/main-navbar.component";

@Component({
  selector: 'app-landing-wrapper',
  imports: [RouterOutlet, TopNavbarComponent, MainNavbarComponent],
  templateUrl: './landing-wrapper.component.html',
  styleUrl: './landing-wrapper.component.css',
})
export class LandingWrapperComponent {

}
