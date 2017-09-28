import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { AddBookComponent } from './views/book/add-book/add-book.component'
import { AddAuthorComponent } from './views/book/add-author/add-author.component'
import { BookListComponent } from './views/book/book-list/book-list.component'
import { MainMenuComponent } from './main-menu/main-menu.component'
import { MainMenuModule } from './main-menu/main-menu.module'

import { BookComponent } from './views/book/book.component'
import { BookModule } from './views/book/book.module'

const appRoutes: Routes = [
  {
    path: 'add/book',
    component: AddBookComponent
  }, {
    path: 'add/author',
    component: AddAuthorComponent
  }, {
    path: 'books',
    component: BookListComponent
  }, {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BookModule,
    MainMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
