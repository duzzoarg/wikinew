import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { WikipediaService } from './wikipedia.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule], // HttpClientModule ya no es necesario aquí
})
export class AppComponent {
  title = 'wikipedia-search';
  searchTerm: string = '';
  searchResults: any[] = [];


  constructor(private wikipediaService: WikipediaService) {}


  searchWikipedia() {
    this.wikipediaService.search(this.searchTerm).subscribe((response: any) => {
      this.searchResults = response.query.search;
    });
  }
}
