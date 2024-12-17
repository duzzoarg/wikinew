import { Component } from '@angular/core';//Importar Component desde el paquete @angular/core
import { FormsModule } from '@angular/forms';//Importar FormsModule
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { WikipediaService } from './wikipedia.service';//Importar la clase WikipediaService desde el archivo wikipedia.service.ts


@Component({//Decorador Component con metadatos
  selector: 'app-root',//Selector del componente
  templateUrl: './app.component.html',//Plantilla HTML del componente
  styleUrls: ['./app.component.css'],//Estilos CSS del componente
  standalone: true,//Componente independiente
  imports: [FormsModule, CommonModule], // HttpClientModule ya no es necesario aquí
})
export class AppComponent {//Clase AppComponent
  title = 'wikipedia-search';//Propiedad title con el valor 'wikipedia-search'
  searchTerm: string = '';//Propiedad searchTerm de tipo string inicializada a una cadena vacía
  searchResults: any[] = [];//Propiedad searchResults de tipo array de any inicializada a un array vacío


  constructor(private wikipediaService: WikipediaService) {}//Constructor que inyecta una instancia de WikipediaService en la propiedad wikipediaService


  searchWikipedia() {//Método searchWikipedia que realiza una búsqueda en Wikipedia
    this.wikipediaService.search(this.searchTerm).subscribe((response: any) => {//Llama al método search del servicio y se suscribe a la respuesta
      this.searchResults = response.query.search;//Asigna los resultados de la búsqueda a la propiedad searchResults
    });
  }
}
