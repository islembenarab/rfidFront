import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private currentRole: string = 'user'; // Default role

  setRole(role: string) {
    this.currentRole = role;
  }

  getRole(): string {
    return this.currentRole;
  }
}
