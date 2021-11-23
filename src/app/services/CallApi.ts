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



    getAPI(SubURI: string, Search: String | number, Search2?: String | number) {

        let StoreInt = <RootModel>{};

        // let Storedstore = <RootModel>{};

        // this.ngRedux.select<RootModel>('root_model')
        //     .subscribe((Model: RootModel) => {
        //         Storedstore = Model;
        //     })

        // console.log("Storedstore: " + JSON.stringify(Storedstore));

        let URI: String = 'http://localhost:3000/';

        let ViewType: String = "";

        this.http.get<any>(`${URI}${SubURI}${Search}`)
        .subscribe((Model: any) => {
            switch (SubURI) {
                case ('CarsContaining/'): {
                    StoreInt.Cars = Model;
                    StoreInt.SubType = "CARS"
                    break;
                }
                case ('PartsContaining/'): {
                    StoreInt.Parts = Model;
                    StoreInt.SubType = "PARTS"
                    break;
                }
                case ('FindCarParts/'): {
                    StoreInt.CarParts = Model;
                    StoreInt.SubType = "CARS"
                    break;
                }
            }
        this.ngRedux.dispatch(callGetAPI(StoreInt));
        })
    }
    //StoreInt.Cars.concat(Model);
    PostAPI(SubURI: string, Input1: String | number, Input2?: String | number) {

        console.log("PostAPI:" + Input1 );

        let StoreInt: RootModel = <RootModel>{};

        let URI: String = 'http://localhost:3000/';

        let ViewType: String = "";

        let headers = {'Access-Control-Allow-Origin': '*', }

        let body = { title: 'Angular POST Request Example' }

        if (Input2 != undefined)
        {
            let SLink: string = `${URI}${SubURI}${Input1}/${Input2}`;

            this.http.post<any>(SLink, null)
            .subscribe(data => {
                console.log(data);
                return data;
            })
        }
        else
        {
            this.http.post<any>(`${URI}${SubURI}${Input1.toString()}`, null)
            .subscribe(data => {
                console.log(data);
                return data;
            })
        }


    }
}