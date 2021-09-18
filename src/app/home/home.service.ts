import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root'
})

export class HomeService {
    constructor(private http: HttpClient) { }
    getData() {
        const url = 'https://jsonplaceholder.typicode.com/users';
        return this.http.get(url)
    }
}