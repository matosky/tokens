import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ServerInteractorService } from './server-interactor.service';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  private apiUrl = `${environment.apiEndpoint}`; // Replace with your Strapi URL and content type

  private serviceInteractor = inject(ServerInteractorService);

  async getPaginatedData(entity: string, page: number = 1, limit: number = 10) {
    const start = (page - 1) * limit;

    return this.serviceInteractor
      .dataGetRequestInterceptor(
        `${this.apiUrl}/${entity}?_sort=createdAt:desc&_start=${start}&_limit=${limit}`
      )
      .subscribe({
        next: (res: any) => res,
        error: (error: any) => console.log('Error fetching data', error),
      });
  }

  async countData(entity: string) {
    return this.serviceInteractor
      .dataGetRequestInterceptor(`${this.apiUrl}/${entity}/count`)
      .subscribe({
        next: (res: any) => res,
        error: (error: any) =>
          console.log('Error retrieving data count', error),
      });
  }
}
