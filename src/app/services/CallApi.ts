import { HttpClient } from '@angular/common/http';
import { NgModule, Injectable} from '@angular/core';
import { RootModel } from '../Models/RootModel';
import { Car } from '../Models/Car';
import { NgRedux } from '@angular-redux/store';
import { IappState } from '../redux/store';
import { callGetAPI } from '../redux/actions';

@Injectable({
    providedIn: 'root',
})
export class APIService {
    
    constructor(
        private http: HttpClient,
        private ngRedux: NgRedux<IappState>
        ) {}

    getAPI(Search: String) {
        this.http.get<Array<Car>>(`http://localhost:3000/CarsContaining/${Search}`)
        .subscribe((Model: Array<Car>) => {
            let StoreInt: RootModel = <RootModel>{};
            StoreInt.Cars = Model;
            this.ngRedux.dispatch(callGetAPI(StoreInt))
        })
    }
}