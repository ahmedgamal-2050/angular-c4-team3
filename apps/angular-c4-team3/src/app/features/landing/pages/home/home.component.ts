import { Component } from '@angular/core';
import { AboutHomeComponent } from '../about-home/about-home.component';
import { ProductReviewComponent } from '../../../prodacts/pages/prodact-review/product-review.component';
import { ProductRelatedComponent } from '../../../prodacts/pages/product-related/product-related.component';

@Component({
  selector: 'app-home',
  imports: [AboutHomeComponent,ProductReviewComponent,ProductRelatedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
