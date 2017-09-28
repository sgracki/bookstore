import { Component, OnInit } from '@angular/core'
import { BookService } from './../book.service'
import { Book } from './../book'
import { Http, Response } from '@angular/http'
import { MdSnackBar } from '@angular/material'

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.sass']
})

export class BookListComponent implements OnInit {

    constructor(public snackBar: MdSnackBar, private BookService: BookService) { }

    books: Array<Book>

    borrowBook(book: Book) {
        book.borrowedAmount = book.borrowedAmount + 1
        this.BookService.updateBook(book)
            .then(
                (response) => {
                    this.snackBar.open('Book status updated!', 'Close', {
                        duration: 2000,
                    })
                }
            )
            .catch(error => {
                this.snackBar.open('Something went wrong!', 'Close', {
                    duration: 2000,
                })
            })
    }

    ngOnInit() {
        this.BookService.getAllBooks()
            .subscribe((books: Array<Book>) => {
                this.books = books
            })
    }
}
