import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person, PersonsResponse } from '../models/person.model';
import { firstValueFrom } from 'rxjs';

@Service()
export class PersonApiService {
    private readonly http = inject(HttpClient);
    private readonly url = 'https://randomuser.me/api/?seed=cda2&results=30&nat=fr';

    async getAll(): Promise<Person[]>
    {
        const response = await firstValueFrom(this.http.get<PersonsResponse>(`${this.url}?limit=12`));
        return response.results;
    }
}
