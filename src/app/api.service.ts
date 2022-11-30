import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  fetchCourses = () =>
  {
    return this.http.get("https://dummyapifriends.herokuapp.com/view")
  }
  addCourse = (dataToSend:any) =>
  {
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata", dataToSend)
  }
}
