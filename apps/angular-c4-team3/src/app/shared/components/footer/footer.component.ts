import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslocoPipe, LucideAngularModule, RouterLink, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  ArrowRight = ArrowRight;

  newsletterForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  navLinks = [
    { label: 'landing_main_navbar_section_home', path: '/' },
    { label: 'landing_main_navbar_section_products', path: '/products' },
    { label: 'landing_main_navbar_section_categories', path: '/categories' },
    { label: 'landing_main_navbar_section_occasions', path: '/occasions' },
    { label: 'landing_main_navbar_section_contact', path: '/contact' },
    { label: 'landing_main_navbar_section_about', path: '/about' },
    { label: 'footer_terms_conditions', path: '/terms' },
    { label: 'footer_privacy_policy', path: '/privacy' },
    { label: 'footer_faqs', path: '/faqs' }
  ];

  subscribe() {
    if (this.newsletterForm.valid) {
      console.log('Newsletter subscription:', this.newsletterForm.value.email);
      this.newsletterForm.reset();
    }
  }
}
