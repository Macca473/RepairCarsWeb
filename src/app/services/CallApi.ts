import { HttpClient } from '@angular/common/http';
import { NgModule, Injectable} from '@angular/core';
import { Car } from '../Models/Car'
import { NgRedux } from '@angular-redux/store';
import { IappState } from '../store';
import { LoadItems } from '../actions';

@Injectable({
    providedIn: 'root',
})
export class APIService {
    
    constructor(
        private http: HttpClient,
        private ngRedux: NgRedux<IappState>
        ) {}

    getAPI() {
        this.http.get<Array<Car>>("http://localhost:3000/CarsContaining/")
        .subscribe((Cars: Array<Car>) => {
            this.ngRedux.dispatch(LoadItems(Cars))
        })
    }
}