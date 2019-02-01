import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';
import { BEST_SELLERS } from '../models/books';

@Injectable({
  //Available to all 
  providedIn: 'root'
})
export class BooksService {


  getBooks(): Observable<Book[]> {
    return of(BEST_SELLERS)
  }

  getBook(id: number): Observable<Book> {
    for (let book of BEST_SELLERS) {
      if (book.id === id) {
        return of(book)
      }
    }

    return of(null)
  }

  updateBook(book: Book): any {
    for (let b of BEST_SELLERS) {
      if (b.id === book.id) {
        Object.assign(b, book)
        return of(book)
      }
    }

    return of(null)
  }

  createBook(book: Book): any {

    let newId: number
    let found: boolean = false

    while (true) {
      newId = Math.floor(Math.random() * 10020)
      found = false
      for (let b of BEST_SELLERS) {
        if (b.id === newId) {
          Object.assign(b, book)
          found = true
          break; 
        }
      }
      if(!found) break 
    }

    book.id = newId
    BEST_SELLERS.push(book)

    return of(book)
  }

  
}
