import { Component, OnInit } from "@angular/core";
import { MenuController, NavController } from "@ionic/angular";
import { HomeService } from "./home.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  public pageTitle = "Nitya Puja";
  public data: any;
  responseData : any; 
  languageSelected: any;

  constructor(private menu: MenuController, private hs: HomeService, public navCtrl: NavController) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.hs.getData().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }

  openFirst() {
    this.menu.enable(true, "first");
    this.menu.open("first");
  }

  setLanguage() {
    console.log('languageSelected',this.languageSelected);
  }
}
