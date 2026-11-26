import { Component, computed, inject, signal } from '@angular/core';
import { PersonCard } from '../person-card/person-card';
import { PersonApiService } from '../../services/person-api-service.service';
import { Person } from '../../models/person.model';
import { firstValueFrom } from 'rxjs';

@Component({
  imports: [PersonCard],
  selector: 'app-person-list',
  styleUrl: './person-list.css',
  templateUrl: './person-list.html',
})
export class PersonList {
  private readonly personApi = inject(PersonApiService);
  persons = signal<Person[]>([]);
  filter = signal<string>("");
  
  visiblePersons = computed(() => 
  {
    const persons = this.persons();
    if (this.filter() != "") 
    {
      return persons.filter((person) => (person.name.first.toLowerCase() + " " + person.name.last.toLowerCase()).includes( this.filter().toLowerCase() ) );
    }
    return persons;
  });

  error = signal<string | null>(null);
  loading = signal(true);

  async ngOnInit(): Promise<void>
  {
    try
    {
      this.persons.set( await  this.personApi.getAll() );
    } catch
    {
      this.error.set("L'annuaire a rencontré une erreur et est indisponible. Veuillez réessayer plus tard.");
    } finally
    {
      this.loading.set(false);
    }
  }
}
