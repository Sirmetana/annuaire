import { Component, input, signal } from '@angular/core';
import { Person } from '../../models/person.model';

@Component({
  imports: [],
  selector: 'app-person-card',
  styleUrl: './person-card.css',
  templateUrl: './person-card.html',
})
export class PersonCard {
  person = input.required<Person>();
}
