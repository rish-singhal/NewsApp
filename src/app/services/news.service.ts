import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { exit } from 'process';
const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  currentArticle: any;

  constructor(private http: HttpClient) { }

  getData(type, country, category, search, page, language, from, to, sortBy) {
    if (type == 'top-headlines') return this.http.get(`${API_URL}/${type}?pageSize=5&page=${page}&country=${country}&category=${category}&apiKey=${API_KEY}`);
    else return this.http.get(`${API_URL}/${type}?pageSize=5&page=${page}&q=${search}&language=${language}&from=${from}&to=${to}&sortBy=${sortBy}&apiKey=${API_KEY}`);     
  }
}
