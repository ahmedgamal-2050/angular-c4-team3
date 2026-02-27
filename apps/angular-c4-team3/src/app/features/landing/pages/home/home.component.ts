import { Component } from '@angular/core';
import { AboutHomeComponent } from '../about-home/about-home.component';
import { ProductReviewComponent } from '../../../prodacts/prodact-review/product-review.component';

@Component({
  selector: 'app-home',
  imports: [AboutHomeComponent,ProductReviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
