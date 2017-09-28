import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'

import { BookListComponent } from './book-list/book-list.component'
import { AddBookComponent } from './add-book/add-book.component'
import { BookComponent } from './book.component'

import { BookService } from './book.service'
import { HttpModule } from '@angular/http'

import { MaterialModule } from '../../material.module'

import { FormsModule } from '@angular/forms'
import { AddAuthorComponent } from './add-author/add-author.component'

@NgModule({
    declarations: [
        BookComponent,
        AddBookComponent,
        BookListComponent,
        AddAuthorComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        CommonModule,
        HttpModule,
        FormsModule
    ],
    exports: [
        BookComponent
    ],
    providers: [BookService]
})
export class BookModule { }
