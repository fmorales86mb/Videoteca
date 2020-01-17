import { InMemoryDbService } from 'angular-in-memory-web-api';

export class PeliculasMock implements InMemoryDbService {
    createDb() {
        const peliculas = [
          { id: 11, titulo: 'HeroesIn', director: '' },
          { id: 12, titulo: 'Narco', director: '' },
          { id: 13, titulo: 'Bombasto', director: '' },
          { id: 14, titulo: 'Celeritas', director: '' },
          { id: 15, titulo: 'Magneta', director: '' },
          { id: 16, titulo: 'RubberMan', director: '' },
          { id: 17, titulo: 'Dynama', director: '' },
          { id: 18, titulo: 'Dr IQ', director: '' },
          { id: 19, titulo: 'Magma', director: '' },
          { id: 20, titulo: 'Tornado', director: '' }
        ];
        return {peliculas};
      }
}
