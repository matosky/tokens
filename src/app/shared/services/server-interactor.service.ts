import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, inject } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { SessionStorageService } from './auth/session-storage.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


interface FilterOptions {
  amount?: string;
  status?: string;
  destination?: string;
  startDate?: string;
  endDate?: string;
  reference?: string;
  [key: string]: string | number | undefined;
}
@Injectable({
  providedIn: 'root',
})
export class ServerInteractorService {
  private http = inject(HttpClient);
  private apiUrl = 'https://paginated-api.onrender.com';

  constructor(
    private auth: AuthService,
    private session: SessionStorageService
  ) {}

  public getUserWallets<T>(url: string): Observable<any> {
    let userInfo: any = this.auth
      .getUserInfo()
      .then((res) => res)
      .catch((error) => console.error('Error getting user Info', error));
      console.log('==========Token==============');
      console.log(userInfo.access_token);
  
      let httpHeaders = new HttpHeaders({
        Authorization: `Bearer ${userInfo.access_token}`,
        'Content-Type': 'application/json',
      });

      let options = {
        headers: httpHeaders,
      };
      return this.http.get<any>(url, options).pipe(
      tap((res) => {
        console.log(res);
        return res.data.wallets as T;
      })
    );
  }

  public getGiftProfile<T>(url: string): Observable<any> {
    let userInfo: any = this.auth
      .getUserInfo()
      .then((res) => res)
      .catch((error) => console.error('Error getting user Info', error));
      console.log('==========Token==============');
      console.log(userInfo.access_token);
      let httpHeaders = new HttpHeaders({
        Authorization: `Bearer ${userInfo.access_token}`,
        'Content-Type': 'application/json',
      });
  
      let options = {
        headers: httpHeaders,
      };
      return this.http.get<any>(url, options).pipe(
      tap((res) => {
        console.log(res);
        return res.data.profiles as T;
      })
    );
  }

  public getRewardCampaigns<T>(url: string): Observable<any> {
    let userInfo: any = this.auth
      .getUserInfo()
      .then((res) => res)
      .catch((error) => console.error('Error getting user Info', error));
      console.log('==========Token==============');
      console.log(userInfo.access_token);
      let httpHeaders = new HttpHeaders({
        Authorization: `Bearer ${userInfo.access_token}`,
        'Content-Type': 'application/json',
      });
  
      let options = {
        headers: httpHeaders,
      };
      return this.http.get<any>(url, options).pipe(
      tap((res) => {
        console.log(res);
        return res.data.campaigns as T;
      })
    );
  }

  public getUserPhoneNumber<T>(url: string): Observable<any> {
    let userInfo: any = this.auth
      .getUserInfo()
      .then((res) => res)
      .catch((error) => console.error('Error getting user Info', error));
      console.log('==========Token==============');
    console.log(userInfo.access_token);
    let httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${userInfo.access_token}`,
      'Content-Type': 'application/json',
    });

    let options = {
      headers: httpHeaders,
    };
      return this.http.get<any>(url, options).pipe(
      tap((res) => {
        console.log(res);
        return res.data.phones as T;
      })
    );
  }

  public getUserAccount<T>(url: string): Observable<any> {
    let userInfo: any = this.auth
      .getUserInfo()
      .then((res) => res)
      .catch((error) => console.error('Error getting user Info', error));
      console.log('==========Token==============');
      console.log(userInfo.access_token);
      let httpHeaders = new HttpHeaders({
        Authorization: `Bearer ${userInfo.access_token}`,
        'Content-Type': 'application/json',
      });
  
      let options = {
        headers: httpHeaders,
      };
      return this.http.get<any>(url, options).pipe(
      tap((res) => {
        console.log(res);
        return res.data.accounts as T;
      })
    );
  }

  public getData<T>(url: string): Observable<any> {
    let userInfo: any = this.auth
      .getUserInfo()
      .then((res) => res)
      .catch((error) => console.error('Error getting user Info', error));
      let httpHeaders = new HttpHeaders({
        Authorization: `Bearer ${userInfo.access_token}`,
        'Content-Type': 'application/json',
      });
  
      let options = {
        headers: httpHeaders,
      };
      return this.http.get<any>(url, options).pipe(
      tap((res) => {
        console.log(res);
        return res.data as T;
      })
    );
  }

  public getLoggedInUser(apiUrl: string): Observable<any> {
    let userInfo: any = this.auth
      .getUserInfo()
      .then((res) => res)
      .catch((error) => console.error('Error getting user Info', error));
      const httpHeaders = new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.access_token}`,
      });
      let options = {
        headers: httpHeaders,
      };
      return this.http.get(apiUrl).pipe(
      tap((res) => {
        console.log(res);
        return res;
      })
    );
  }

  public giftCashTokenProcess(url: string, payload: any): Observable<any> {
    let userInfo: any = this.auth
      .getUserInfo()
      .then((res) => res)
      .catch((error) => console.error('Error getting user Info', error));
      console.log(payload);
      let httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.access_token}`,
      });
      let options = {
        headers: httpHeaders,
      };
    return this.http.post<any>(url, payload, options).pipe(
      tap((res) => {
        console.log(res);
        return res.data;
      })
    );
  }

  public createRewardCampaign(url: string, payload: any): Observable<any> {
    let userInfo: any = this.auth
      .getUserInfo()
      .then((res) => res)
      .catch((error) => console.error('Error getting user Info', error));
    console.log(payload);
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userInfo.access_token}`,
    });
    let options = {
      headers: httpHeaders,
    };
    return this.http.post<any>(url, payload, options).pipe(
      tap((res) => {
        console.log(res);
        return res.data;
      })
    );
  }

  public getDataWithNoHeaderAuthRequestInterceptor<T>(
    apiUrl: string
  ): Observable<any> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers: httpHeaders,
    };
    return this.http.get<any>(apiUrl, options).pipe(
      tap((res) => {
        console.log(res);
        return res.data as T;
      })
    );
  }

  public dataPostWithBearerInterceptor(
    url: string,
    payload: any
  ): Observable<any> {
    console.log(payload);
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.session.readSession().jwt}`,
    });
    let options = {
      headers: httpHeaders,
    };
    return this.http.post<any>(url, payload, options).pipe(
      tap((res) => {
        console.log(res);
        return res.data;
      })
    );
  }

  public dataPostWithBearerInterceptorReactive(
    url: string,
    payload: any
  ): Observable<any> {
    console.log(payload);
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.session.readSession().jwt}`,
    });
    let options = {
      headers: httpHeaders,
    };
    console.log('payment payload....', payload);
    return this.http.post<any>(url, payload, options).pipe(
      tap((res) => {
        console.log(res);
        return res;
      })
    );
  }

  public dataPutWithBearerInterceptor(
    url: string,
    payload: any
  ): Observable<any> {
    console.log(payload);
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.session.readSession().jwt}`,
    });
    let options = {
      headers: httpHeaders,
    };
    return this.http.put<any>(url, payload, options).pipe(
      tap((res) => {
        console.log(res);
        return res.data;
      })
    );
  }

  public dataPostInterceptor(url: string, payload: any): Observable<any> {
    console.log(payload);
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = {
      headers: httpHeaders,
    };
    return this.http.post<any>(url, payload, options).pipe(
      tap((res) => {
        console.log(res);
        return res.data;
      })
    );
  }

  public dataPutInterceptor(url: string, payload: any): Observable<any> {
    console.log('===========dataPutInterceptor ============');
    console.log(payload);
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.session.readSession().jwt}`,
    });
    let options = {
      headers: httpHeaders,
    };
    return this.http.put<any>(url, payload, options).pipe(
      tap((res) => {
        console.log(res);
        return res.data;
      })
    );
  }

  public dataPatchInterceptor(url: string, payload: any): Observable<any> {
    let userInfo: any = this.auth
      .getUserInfo()
      .then((res) => res)
      .catch((error) => console.error('Error getting user Info', error));
    console.log('===========dataPutInterceptor ============');
    console.log(payload);
    let httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${userInfo.access_token}`,
    });
    let options = {
      headers: httpHeaders,
    };
    return this.http.patch<any>(url, payload, options).pipe(
      tap((res) => {
        console.log(res);
        return res.data;
      })
    );
  }

  /*   public async dataUploadPostInterceptor(url: string, payload: any) {
    let userInfo: any = await this.auth.getUserInfo();
    //let bodyString = JSON.stringify(payload);
    console.log(payload);
    let httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${userInfo.access_token}`,
    });
    let options = {
      headers: httpHeaders,
    };
    return this.http.post<any>(url, payload, options).subscribe({
      next: (res) => {
        return res.data;
      },
      error: (error) => {
        console.error('Error uploading data', error);
      },
    });
  } */

  public dataUploadPostInterceptor(url: string, payload: any): Observable<any> {
    let userInfo: any = this.auth
      .getUserInfo()
      .then((res) => res)
      .catch((error) => console.error('Error getting user Info', error));
    console.log(payload);
    let httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${userInfo.access_token}`,
    });
    let options = {
      headers: httpHeaders,
    };
    return this.http.post<any>(url, payload, options).pipe(
      tap((res) => {
        console.log(res);
        return res.data;
      })
    );
  }

  get headers(): Promise<HttpHeaders> {
    return new Promise(async (resolve) => {
      //  let userInfo:any = await this.auth.getUserInfo();
      let userBearer: any = this.session.readSession().jwt;
      //  console.log('===========***User Info***=============');
      //  console.log(userBearer)
      resolve(
        new HttpHeaders({
          Authorization: `Bearer ${userBearer}`,
        })
      );
    });
  }

  dataGetRequestInterceptor(
    url:string,
    page: number,
    pageSize: number,
    filter: any = {}
  ): Observable<any> {
    // let httpHeaders = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   Authorization: `Bearer ${this.session.readSession().jwt}`,
    // });
    // let options = {
    //   headers: httpHeaders,
    // };
    return this.http.get<any>(`${this.apiUrl}/${url}?page=${page}&limit=${pageSize}`);
  }

  filterDataGetRequestInterceptor(
    url:string,
    page: number,
    pageSize: number,
    filter: FilterOptions = {}
  ): Observable<any> {
    // let httpHeaders = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   Authorization: `Bearer ${this.session.readSession().jwt}`,
    // });
    // let options = {
    //   headers: httpHeaders,
    // };
    const params = this.createFilterParams(filter);

    return this.http.get<any>(`${this.apiUrl}/${url}?page=${page}&limit=${pageSize}`, {
      params: Object.keys(params).length > 0 ? params : undefined,
      responseType: 'json' 
    });
  }


  private createFilterParams(filter: FilterOptions): { [param: string]: string } {
    const params: { [param: string]: string } = {};

    for (const key in filter) {
      if (filter.hasOwnProperty(key) && filter[key] !== undefined && filter[key] !== null && filter[key] !== '') {
        params[key] = filter[key]?.toString() ?? ''; 
      }
    }

    return params;
  }
}
