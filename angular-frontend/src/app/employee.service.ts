import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employees } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 private baseURL = "http://localhost:8080/api/v1/employees";
 //private baseURL = "http://192.168.49.2:31441/api/v1/employees";
 //private baseURL = "http://springboot-backend-custom-backend:8080/api/v1/employees";
 
//private baseURL = "http://arifemployeemanagement-service:8080/api/v1/employees"
//private baseURL = "http://aa9e434e70da84c07a3b55fcd9930307-1525752066.us-east-1.elb.amazonaws.com:8080/api/v1/employees"



  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employees[]>{
    return this.httpClient.get<Employees[]>(`${this.baseURL}`);
//    return this.httpClient.get<Employees[]>(`http://aa9e434e70da84c07a3b55fcd9930307-1525752066.us-east-1.elb.amazonaws.com:8080/api/v1/employees`);
    
  }

  createEmployee(employee: Employees): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employees>{
    return this.httpClient.get<Employees>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employees): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
