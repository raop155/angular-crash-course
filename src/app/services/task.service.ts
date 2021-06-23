import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { Task } from "../Task"

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiURL = "http://localhost:5000/tasks"

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL)
  }

  addTask(task:Task):Observable<Task> {
    return this.http.post<Task>(this.apiURL, task, httpOptions)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`
    return this.http.delete<Task>(url)
  }

  toggleTask(task: Task): Observable<Task> {
    const url = `${this.apiURL}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }
}
