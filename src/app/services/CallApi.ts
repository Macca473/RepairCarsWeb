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

    getAPI(SubURI: string, Search: String) {
        
        let StoreInt: RootModel = <RootModel>{};

        let URI: String = 'http://localhost:3000/';

        let ViewType: String = "";

        this.http.get<any>(`${URI}${SubURI}${Search}`)
        .subscribe((Model: any) => {
            switch (SubURI) {
                case ('CarsContaining/'): {
                    StoreInt.Cars = Model;
                    ViewType = "CARS"
                    break;
                }
                case ('PartsContaining/'): {
                    StoreInt.Parts = Model;
                    ViewType = "PARTS"
                    break;
                }
            }
        this.ngRedux.dispatch(callGetAPI(StoreInt, ViewType))
        })
    }

    PostAPI(SubURI: string, Input1: String) {

        console.log("PostAPI:" + Input1 );

        let StoreInt: RootModel = <RootModel>{};

        let URI: String = 'http://localhost:3000/';

        let ViewType: String = "";

        let headers = {'Access-Control-Allow-Origin': '*', }

        let body = { title: 'Angular POST Request Example' }

        this.http.post<any>(`${URI}${SubURI}${Input1}`, null)
        .subscribe(data => {
            return data;
        })
    }
}