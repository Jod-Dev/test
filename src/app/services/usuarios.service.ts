import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { UsuariosInterface } from '../interfaces/sap.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //baseUrl = environment.base;

  //baseUrl = environment.usersUrl;

  constructor(private _http: HttpClient) { }

  createUsuarios(user) {
    return this._http.post('http://localhost:3000/users', user);
  }

  getUsuarios() {
    return this._http.get('http://localhost:3000/users');
  }

  updateUsuarios(user) {
     return this._http.put('http://localhost:3000/users/'+user.id, user);
  }

  deleteUsuarios(user) {
    return this._http.delete('http://localhost:3000/users/'+user.id);
  }


}
