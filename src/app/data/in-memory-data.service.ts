import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        // the name of const is also the string appended to url when call api
        // like example below: localhost:4200/api/heroes/
        const heroes = [
            { id: 1, name: 'Batman', power: null },
            { id: 2, name: 'Superman', power: null },
            { id: 3, name: 'Aquaman', power: null },
            { id: 4, name: 'Hawkman', power: null },
            { id: 5, name: 'Green Latern', power: null },
            { id: 6, name: 'Atom', power: null },
            { id: 7, name: 'Shazam', power: null },
            { id: 8, name: 'Wonder Woman', power: null },
            { id: 9, name: 'Dr.Sinava', power: null },
            { id: 16, name: 'Ocean Master', power: null }
        ];
        return { heroes };
    }
}
