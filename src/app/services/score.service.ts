import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ScoreService {

  private url:string="http://localhost:8080/points";

  constructor(private http:Http) { }

  public  getPoints() : Observable<string> {
             return this.http.get(this.url)
                             .map(res => res.text())
                             //...errors if any
                             .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
         }

}
