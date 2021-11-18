import { Component, OnInit } from '@angular/core';

import { NgRedux, select } from '@angular-redux/store';
import { IappState } from '../redux/store';

import { RootModel } from '../Models/RootModel'

import { Car } from '../Models/Car'

import { Part } from '../Models/Part'

import { APIService } from '../services/CallApi'
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css']
})
export class ResultViewComponent implements OnInit {

  constructor(
    private ngRedux: NgRedux<IappState>,
    private _APIService: APIService
    ) {
      this.ngRedux.select<RootModel>('root_model')
      .subscribe((Model: RootModel) => {
        this.Cars = Model.Cars;
        this.Parts = Model.Parts;
      })
      this.ngRedux.select<String>('callType')
      .subscribe((CallType: String) => {
        this.ViewType = CallType;
        console.log("ViewType: " + CallType);
      })

    }

  Cars: Array<Car> = new Array<Car>();

  Parts: Array<Part> = new Array<Part>();

  ViewType: String = "";

  // ListCars(): void {
  //   this.ngRedux.subscribe
  // }

  ngOnInit(): void {

  }
}

function input(arg0: string) {
  throw new Error('Function not implemented.');
}

