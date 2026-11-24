import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  showNotifications = false;
  notifications = ['Nouvelle conférence ajoutée', 'Sami vous a envoyé une invitation'];

  toggle() {
    this.showNotifications = !this.showNotifications;
  }
}
