import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { User, UserManager, UserManagerSettings } from 'oidc-client';
import { Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private manager!: UserManager;
  private user!: User | null;
  private authChangeSubject = new Subject<boolean>();
  public status = this.authChangeSubject.asObservable();
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router,
    private session: SessionStorageService
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

  public login() {
    console.log('Redirect to OpenId');
    console.log(this.manager);
    return this.manager.signinRedirect();
  }

  public logout() {
    return this.manager.signoutRedirect().then(() => {
      this.authChangeSubject.next(false);
    });
  }

  public getAuthState() {
    return this.manager.getUser().then((user) => {
      const status = !!user && !user.expired;

      if (this.user !== user) {
        console.log(`${this.user}`);
        this.authChangeSubject.next(status);
      }

      this.user = user;
      console.log(`${this.user}`);
      return status;
    });
  }

  canActivate() {
    if (sessionStorage.getItem('user') != null) {

        return true;
    } else {
      this.router.navigate(['/pages/login']);
      return false;
    }
  }
  public isAuthorise() {
    return this.manager.getUser().then((user) => {
      const status = !!user && !user.expired;

      if (!status) {
        console.log(`${this.user}`);
        this.router.navigate(['']);
        this.authChangeSubject.next(status);
      }

      this.user = user;
      console.log(`${this.user}`);
      return status;
    });
  }

  public async getUserInfo() {
    return this.manager.getUser().then((user) => {
      const status = !!user && !user.expired;

      if (!status) {
        console.log(`${this.user}`);
        this.router.navigate(['']);
        this.authChangeSubject.next(status);
      }

      this.user = user;
      console.log(`${this.user}`);
      return this.user;
    });
  }

  public onLoginReturn() {
    return this.manager.signinRedirectCallback().then((user) => {
      this.user = user;
      this.authChangeSubject.next(!!user && !user.expired);
      return user;
    });
  }

  public onLogoutReturn() {
    return this.manager.signoutRedirectCallback().then((response) => {
      this.user = null;
      return response;
    });
  }
}
