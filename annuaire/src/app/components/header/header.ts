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
  private readonly personApi = inject(PersonApiService);
  persons = signal<Person[]>([]);

  loading = signal(true);
  error = signal<string | null>(null);
  

  async ngOnInit(): Promise<void> 
  {
    try {
      this.persons.set(await this.personApi.getAll());
    } catch {
      this.error.set('Le catalogue est indisponible. Réessaie dans un instant.')
    } finally {
      this.loading.set(false);
    }
  }
}
