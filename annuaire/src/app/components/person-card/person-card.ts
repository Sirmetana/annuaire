import { Component, input, signal } from '@angular/core';
import { Person } from '../../models/person.model';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-person-card',
  styleUrl: './person-card.css',
  templateUrl: './person-card.html',
})
export class PersonCard {
  person = input.required<Person>();
}
