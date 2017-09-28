import { Component, OnInit } from '@angular/core'
import { BookService } from '../book.service'
import { MdSnackBar } from '@angular/material'

@Component({
    selector: 'app-add-author',
    templateUrl: './add-author.component.html',
    styleUrls: ['./add-author.component.sass']
})

export class AddAuthorComponent implements OnInit {

    constructor(public snackBar: MdSnackBar, private BookService: BookService) {}

    author = {
        name: ''
    }

    addAuthor(): void {
        this.BookService.addAuthor(this.author)
            .then(
                (response) => {
                    this.snackBar.open('Zbiór rośnie!', 'Zamknij', {
                        duration: 2000,
                    })
                }
            )
            .catch(error => {
                this.snackBar.open('Wszystkie pola są wymagane!', 'Zamknij', {
                    duration: 2000,
                })
            })
    }

    ngOnInit() {
    }

}
