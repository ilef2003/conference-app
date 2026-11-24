import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Conference } from '../models/conference';

@Component({
  selector: 'app-conference-details',
  imports: [DatePipe],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css',
})
export class ConferenceDetails {
  // parent -> enfant
  @Input() conference: Conference | null = null;

  // enfant -> parent
  @Output() registered = new EventEmitter<Conference>();

  register() {
    if (this.conference) {
      this.registered.emit(this.conference);
    }
  }
}
