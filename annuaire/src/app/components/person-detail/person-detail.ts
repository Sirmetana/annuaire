import { Component, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PersonApiService } from '../../services/person-api-service.service';
import { Person } from '../../models/person.model';

@Component({
  imports: [RouterLink],
  selector: 'app-person-detail',
  styleUrl: './person-detail.css',
  templateUrl: './person-detail.html',
})
export class PersonDetail {
  personApi = inject(PersonApiService);
  id= input.required<string>();
  person = signal<Person | undefined>(undefined);

  loading = signal(true);

  async ngOnInit(): Promise<void> {
    try {
      this.person.set( (await this.personApi.getAll()).find((element) => element.login.uuid === this.id()));
    } catch {
      this.person.set(undefined);
    } finally {
      this.loading.set(false);
    }
  }
}
