import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'http://localhost:8080/personas/';
  //URL = 'https://backendjlc.onrender.com/personas/';

  URL = environment.URL + 'personas/';

  constructor(private http: HttpClient) { }

  // public getPersona(): Observable<persona> {
  //   //return this.http.get<persona>(this.URL + 'traer/perfil/2');
  //   return this.http.get<persona>(this.URL + 'detail/2');
  // }

  //MODIFY SERVICE
  public lista(): Observable<persona[]> {
    return this.http.get<persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<persona> {
    return this.http.get<persona>(this.URL + `detail/${id}`);
  }

  // public save(Persona: persona): Observable<any> {
  //   return this.http.post<any>(this.URL + 'create', Persona);
  // }

  public update(id: number, Persona: persona): Observable<any> {
    console.log('Persona a modificar es: ', Persona);
    return this.http.put<any>(this.URL + `update/${id}`, Persona);
  }

  // public delete(id: number): Observable<any> {
  //   return this.http.delete<any>(this.URL + `delete/${id}`);
  // }
}
