import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-special-puja",
  templateUrl: "./special-puja.page.html",
  styleUrls: ["./special-puja.page.scss"],
})
export class SpecialPujaPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  ionInputChange(event) {
    console.log(event);
  }
}
