import { Component, inject, signal } from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonApiService } from '../../services/person-api-service.service';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header
{
}
