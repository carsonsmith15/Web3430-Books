import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  //selector: 'app-book-form',
  templateUrl: './book-form.component.html'
})
export class BookFormComponent implements OnInit {

  book: Book = new Book()
  constructor(private booksService: BooksService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let bid = this.route.snapshot.params['id']
    if (bid !== undefined) {
      this.booksService.getBook(+bid).subscribe(orig => Object.assign(this.book, orig))
      //Object.assign(target, source)
    }
  }

  onSubmit() {
    if (this.book.id == undefined) {
      this.booksService.createBook(this.book)
    }
    else {
      this.booksService.updateBook(this.book);
    }

    this.router.navigate(['/books'])

  }

}
