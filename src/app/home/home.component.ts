import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  bannerImages: any[] = [
    { path: "assets/images/homepage/banner-1.jpg" },
    { path: "assets/images/homepage/banner-2.jpeg" },
    { path: "assets/images/homepage/banner-3.jpg" },
    { path: "assets/images/homepage/banner-4.jpg" },
  ];

  cellWidth: string = '98%'

  teaCat = [
    {
      title: "award winners",
      img: "assets/images/homepage/award-winners.jpg",
      identity: "award winner"
    },
    {
      title: "signature teas",
      img: "assets/images/homepage/signature-teas.jpg",
      identity: "signature"
    },
    {
      title: "Black teas",
      img: "assets/images/homepage/assam-black-teas.jpg",
      identity: "black tea"
    },
    {
      title: "infusions and blends",
      img: "assets/images/homepage/infusions-and-blends.jpg",
      identity: "fusions and blends"
    },
    {
      title: "white teas",
      img: "assets/images/homepage/white-teas.jpg",
      identity: "white tea"
    },
    {
      title: "green teas",
      img: "assets/images/homepage/green-teas.jpg",
      identity: "green tea"
    },
  ];
  
  showWhite: boolean= true

  constructor() {}

  ngOnInit() {
  }

  changeSMCat = (show) => {
    this.showWhite = show
  }
}
