import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TwitterService {
  constructor(private http: HttpClient) {}

  private url: string = environment.backend;

  getTweets(word: string) {
    const data = this.http.get(`${this.url}/search/${word}`).toPromise();
    return data;
  }
}
