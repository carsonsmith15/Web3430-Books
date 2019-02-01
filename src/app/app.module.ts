import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book.component';
import {routes} from './routes';
import {RouterModule} from '@angular/router';
import { BookFormComponent } from './books/book-form.component'; 

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
