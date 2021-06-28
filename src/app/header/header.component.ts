import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const header = document.querySelector(".header");
    const links = document.querySelectorAll(".nav-link");
    if (window.location.pathname == "/") {
      window.addEventListener("scroll", (e) => {
        if (window.scrollY > 100) {
          header.style.backgroundColor = "white";
          links.forEach((link) => {
            link.classList.add("black-font");
          });
        } else {
          header.style.backgroundColor = "transparent";
          links.forEach((link) => {
            link.classList.remove("black-font");
          });
        }
      });
    }
    else {
      links.forEach((link) => {
        link.classList.add("black-font");
      });
      header.style.backgroundColor = "white";
    }
  }
}
