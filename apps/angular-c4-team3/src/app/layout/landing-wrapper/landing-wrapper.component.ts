import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { TopNavbarComponent } from "../../shared/components/top-navbar/top-navbar.component";

@Component({
  selector: 'app-landing-wrapper',
  imports: [RouterOutlet, TopNavbarComponent],
  templateUrl: './landing-wrapper.component.html',
  styleUrl: './landing-wrapper.component.css',
})
export class LandingWrapperComponent {

}
