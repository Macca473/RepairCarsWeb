import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  InputChoice: Number = 0;

  InputSearch: String | undefined;

  constructor() { }

  SelectSearchType(inputint: Number): void {

    this.InputChoice = inputint;

    console.log("inputChoice Changed to: " + this.InputChoice);
  }

  Search(inputString: String): void {
    this.InputSearch = inputString;
  }




  ngOnInit(): void {
  }

}
