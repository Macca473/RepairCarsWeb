import { Component, OnInit } from '@angular/core';

import { APIService } from '../services/CallApi'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  CarSearch: String | undefined;

  PartSearch: String | undefined;

  CarName: String | undefined;

  constructor(private _APIService: APIService) { }

  SearchCars(inputString: String): void {
    this.CarSearch = inputString;
    this._APIService.getAPI('CarsContaining/',inputString);
  };

  AddCar(inputName: String): void {
    this.CarName = inputName;
    this._APIService.PostAPI('AddCar/',inputName);
  }

  SearchParts(inputString: String): void {
    this.PartSearch = inputString;
    this._APIService.getAPI('PartsContaining/',inputString);
  };




  ngOnInit(): void {
  }

}
