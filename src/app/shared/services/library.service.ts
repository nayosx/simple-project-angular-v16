import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Book} from 'src/app/shared/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private baseURL = 'http://localhost:3000/library';

  constructor(private http: HttpClient) {}

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseURL, book);
  }

  getAllBooks(): Observable<Book> {
    return this.http.get<Book>(this.baseURL);
  }

  getBookById(id: number): Observable<Book> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Book>(url);
  }

  updateBook(id: number, updatedBook: Book): Observable<Book> {
    const url = `${this.baseURL}/${id}`;
    return this.http.put<Book>(url, updatedBook);
  }

  deleteBook(id: number): Observable<any> {
    const url = `${this.baseURL}/${id}`;
    return this.http.delete(url);
  }
}
