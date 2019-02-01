import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookFormComponent } from './books/book-form.component';

export const routes: Routes = [

    { path: 'books', component: BooksComponent },
    { path: 'books/new', component: BookFormComponent },
    { path: 'books/:id/edit', component: BookFormComponent },
    { path: '', redirectTo: '/books', pathMatch: 'full' }

]