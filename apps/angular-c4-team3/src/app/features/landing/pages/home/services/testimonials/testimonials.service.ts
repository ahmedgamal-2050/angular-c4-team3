import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../../../../shared/constants/endpoints';
import { ITestimonialsResponse } from '../../services/testimonials/testimonials.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  private http = inject(HttpClient);
    
 getTestimonials(page = 1, limit = 5): Observable<ITestimonialsResponse> {
  const params = new HttpParams()
    .append('page', page)
    .append('limit', limit);

  const url = ENDPOINTS.Get_All_Testimonials;

  return this.http.get<ITestimonialsResponse>(url, { params });
}
 
}
