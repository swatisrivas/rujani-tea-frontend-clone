import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TeaService } from "../tea.service";

@Component({
  selector: "app-listing",
  templateUrl: "./listing.component.html",
  styleUrls: ["./listing.component.css"],
})
export class ListingComponent implements OnInit {
  teas: any[];

  constructor(private route: ActivatedRoute, private teaService: TeaService) {}

  ngOnInit() {
    const param: string = this.route.snapshot.params.category;
    this.fetchTeas(param);
  }

  goToProduct = (id: number) => {
    window.location.href = window.location.origin + '/tea/' + id
  }

  fetchTeas(category: string) {
    if (category) {
      this.teaService.getByTypeAndCategory(category).subscribe((data: any) => {
        console.log("CATEGORIES");
        this.teas = data;
        console.log(data)
      });
    } else {
      this.teaService.getAllTeas().subscribe((data: any) => {
        console.log("ALL");
        this.teas = data;
        console.log(data);
      });
    }
  }
}
