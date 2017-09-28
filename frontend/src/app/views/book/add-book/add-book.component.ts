import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { BookService } from './../book.service'
import { MdSnackBar } from '@angular/material'
import { Book } from './../book'
import { Author } from './../author'

@Component({
    selector: 'app-add-book',
    templateUrl: './add-book.component.html',
    styleUrls: ['./add-book.component.sass']
})
export class AddBookComponent implements OnInit {

    constructor(public snackBar: MdSnackBar, private BookService: BookService) { }

    book = {}

    authors: Array<any>

    addBook(f: NgForm): void {
        this.BookService.addBook(this.book)
            .then(
                (response: Book) => {
                    this.snackBar.open('Biblioteka rośnie!', 'Zamknij', {
                        duration: 2000,
                    })
                }
            )
    }

    ngOnInit() {
        this.BookService.getAllAuthors()
            .subscribe((authors: Array<Author>) => {
                this.authors = authors
            })
    }

}
