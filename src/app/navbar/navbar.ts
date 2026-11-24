import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isAdmin = true;
  links = ['Accueil', 'Profil', 'Conférences', 'Amis', 'Notifications', 'Admin'];
  activeLink = 'Accueil';

  select(link: string, event: Event) {
    event.preventDefault();
    this.activeLink = link;
  }
}
