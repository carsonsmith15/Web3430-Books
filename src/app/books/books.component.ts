import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BooksService } from '../services/books.service';

@Component({
    selector: 'books-el',
    templateUrl: './books.component.html'
})

export class BooksComponent implements OnInit
{
   
    constructor(private booksService : BooksService){}   
    books : Book[] = []
    // selectedBook : Book

    // selectBook(book : Book)
    // {
    //     this.selectedBook = book; 
    // }

    ngOnInit(): void {
        this.booksService.getBooks().subscribe( data => this.books = data)
    }
}

