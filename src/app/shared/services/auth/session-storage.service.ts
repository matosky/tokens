export class SessionStorageService {
  public storeSession(userSession: any) {
    console.log('User Session');
    console.log(JSON.stringify(userSession));
    sessionStorage.setItem('user', JSON.stringify(userSession));
  }

  public readSession() {
    const userString: string | null = sessionStorage.getItem('user');
    const user = userString as string; // Non-null assertion operator

    // Now 'user' is of type 'string' and not 'string | null'
    return JSON.parse(user);
  }

  isSessionExist() {
    if (sessionStorage.getItem('user') != null) {
      return true;
    } else {
      return false;
    }
  }

  public clearSession() {
    sessionStorage.removeItem('user');
  }
}
