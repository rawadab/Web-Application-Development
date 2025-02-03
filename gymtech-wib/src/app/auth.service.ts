import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:3000/api/login'; // Correct URL endpoint

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<any> {
        return this.http.post<any>(this.apiUrl, { email, password });
    }
}
