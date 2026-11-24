import { Component } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../models/conference';
import { ConferenceDetails } from '../conference-details/conference-details';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, NgClass, UpperCasePipe, DatePipe, ConferenceDetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  searchTerm = '';
  selectedConference: Conference | null = null;

  // attention : le mois commence à 0 (10 = novembre)
  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Découverte des nouveautés d’Angular 21.',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 50,
      nbParticipants: 25,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur les Signals Angular.',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Conférence sur les technologies du web moderne.',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 40,
      nbParticipants: 40,
    },
  ];

  // conférences à venir + filtrées par la recherche
  get upcomingConferences(): Conference[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const term = this.searchTerm.trim().toLowerCase();
    return this.conferences.filter(
      (c) => c.date >= today && c.title.toLowerCase().includes(term)
    );
  }

  select(conference: Conference) {
    this.selectedConference = conference;
  }

  register(conference: Conference) {
    if (conference.nbParticipants < conference.maxParticipants) {
      conference.nbParticipants++;
    }
  }
}
