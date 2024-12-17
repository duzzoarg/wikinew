import { Injectable } from '@angular/core';//Importa la clase Injectable desde el paquete @angular/core
import { HttpClient } from '@angular/common/http';//Importa la clase HttpClient desde el paquete @angular/common/http
import { Observable } from 'rxjs';//Importa la clase Observable desde el paquete rxjs


@Injectable({//Decorador Injectable que marca la clase WikipediaService como inyectable
  providedIn: 'root',//El servicio se proporciona en el nivel raíz de la aplicación
})
export class WikipediaService {//Clase WikipediaService
  private apiUrl = 'https://en.wikipedia.org/w/api.php';//URL de la API de Wikipedia


  constructor(private http: HttpClient) {}//Constructor que inyecta una instancia de HttpClient en la propiedad http


  search(term: string): Observable<any> {//Método search que recibe un término de búsqueda y devuelve un Observable
    const params = {//Objeto params con los parámetros de la consulta
      action: 'query',//Acción de la consulta
      list: 'search',//Lista de resultados de la consulta
      format: 'json',//Formato de la respuesta
      origin: '*',//Permite las solicitudes de origen cruzado
      srsearch: term,//Término de búsqueda
    };
    return this.http.get(this.apiUrl, { params });//Devuelve un Observable que realiza una petición GET a la URL de la API con los parámetros
  }
}
