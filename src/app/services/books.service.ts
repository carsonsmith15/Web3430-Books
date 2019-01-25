import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';
import { BEST_SELLERS } from '../models/books';

@Injectable({
  //Available to all 
  providedIn: 'root'
})
export class BooksService {

  getBooks(): Observable<Book[]> 
  {
      return of(BEST_SELLERS) 
  }

  constructor() { }
}
