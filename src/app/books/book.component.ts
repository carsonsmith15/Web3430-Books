import { Component, Input } from "@angular/core";
import { Book } from '../models/book';

@Component({
    selector: "book-el",
    templateUrl: "./book.component.html"
})

export class BookComponent
{
    @Input() book : Book

    expanded : boolean = false 

    expandOrShrink()
    {
        this.expanded = !this.expanded
    }
}