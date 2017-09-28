import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Book } from './book'
import { Author } from './author'
import 'rxjs/Rx'

@Injectable()
export class BookService {

    constructor(private http: Http) {}

    private apiUrl = 'http://localhost:4000'

    public addAuthor(author: any): Promise<Object> {
        return this.http.post(`${this.apiUrl}/authors`, author)
            .toPromise()
            .then(response => response.json().data as Author)
            .catch(this.handleError)
    }

    public getAllBooks(): Observable<Book[]> {
        return this.http.get(`${this.apiUrl}/books`)
            .map((res: Response) => res.json())
            .catch(
                (error: any) => Observable.throw(error.json().error || 'Server error')
            )
    }

    public updateBook(book: any): Promise<Object> {
        return this.http.put(`${this.apiUrl}/books/${book._id}`, book)
            .toPromise()
            .then(response => response.json().data as Book)
            .catch(this.handleError)
    }

    public getAllAuthors(): Observable<Author[]> {
        return this.http.get(`${this.apiUrl}/authors`)
            .map((res: Response) => res.json())
            .catch(
                (error: any) => Observable.throw(error.json().error || 'Server error')
            )
    }

    public addBook(book: any): Promise<Object> {
        return this.http.post(`${this.apiUrl}/books`, book)
            .toPromise()
            .then(response => response.json().data as Book)
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error)
        return Promise.reject(error.message || error)
    }
}
