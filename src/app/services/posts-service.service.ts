import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, Root } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor(private http: HttpClient) { }


  getPosts(){
    return this.http.get<Root>('https://dummyjson.com/posts');
  }

}
