import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BASE_URL } from '../shared/config/api.config';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http
        .get<Post[]>(`${BASE_URL}/posts`);       
  }
}
