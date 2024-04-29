import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { User, UserManager, UserManagerSettings } from 'oidc-client';
import { Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteGuard {
  private manager!: UserManager;
  private authChangeSubject = new Subject<boolean>();
  public status = this.authChangeSubject.asObservable();
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router
  ) {
    const settings: UserManagerSettings = {
      // authority: environment.OpenId.Authority,
      // client_id: environment.OpenId.ClientId,
      // scope: environment.OpenId.Scopes,
      // revokeAccessTokenOnSignout: true,
      // response_type: 'code',
      // redirect_uri: environment.OpenId.RedirectUri,
      // post_logout_redirect_uri: environment.OpenId.PostLogoutRedirectUri,
    };
    if (isPlatformBrowser(this.platformId)) {
      try {
        this.manager = new UserManager(settings);
        this.manager.events.addAccessTokenExpired(() => {
          this.authChangeSubject.next(false);
        });
      } catch (error) {
        console.log('OpenId Error');
        console.log(error);
      }
    }
  }

  async canActivate() {
    if (JSON.parse(sessionStorage.getItem('user') as string).user.tempPassword !== null) {
        return this.router.navigate(['/change-password']);
      } else {
      return true;
    }
  }
}
