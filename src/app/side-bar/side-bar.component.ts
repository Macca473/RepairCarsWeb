import { Component, OnInit } from '@angular/core';

import { APIService } from '../services/CallApi'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  InputChoice: Number = 0;

  InputSearch: String | undefined;

  constructor(private _APIService: APIService) { }

  SelectSearchType(inputint: Number): void {

    this.InputChoice = inputint;

    console.log("inputChoice Changed to: " + this.InputChoice);
  }

  Search(inputString: String): void {
    this.InputSearch = inputString;
    this._APIService.getAPI(inputString);
  }




  ngOnInit(): void {
  }

}
