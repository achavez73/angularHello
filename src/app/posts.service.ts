import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http : HttpClient) { }

  getPost(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts');
  }
}
