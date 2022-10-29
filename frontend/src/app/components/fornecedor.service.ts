import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Fornecedor } from './product/fornecedor.model';

@Injectable({
  providedIn: 'root'
})

export class FornecedorService {

  baseUrl = 'http://localhost:3001/fornecedor';
  
  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }
  
  
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    })
  }

  createFor(fornecedor: Fornecedor): Observable<Fornecedor>{
    return this.http.post<Fornecedor>(this.baseUrl, fornecedor)
  }

  readFor(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.baseUrl)
  }

  readByIdFor(id: string): Observable<Fornecedor> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Fornecedor>(url)
  }

  updateFor(fornecedor: Fornecedor): Observable<Fornecedor> {
    const url = `${this.baseUrl}/${fornecedor.id}`
    return this.http.put<Fornecedor>(url, fornecedor)
  }

  deleteFor(fornecedor: Fornecedor): Observable<Fornecedor> {
    const url = `${this.baseUrl}/${fornecedor.id}`
    return this.http.delete<Fornecedor>(url)
  }

}

