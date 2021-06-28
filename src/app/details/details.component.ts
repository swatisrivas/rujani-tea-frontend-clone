import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TeaService } from "../tea.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private teaService: TeaService) {}

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.fetchTea(id);
  }

  count: number = 1;
  tea: any = {};
  showConfirmation: boolean = false;

  increaseCount = () => {
    this.count += 1;
  };

  decreaseCount = () => {
    if (this.count > 1) {
      this.count -= 1;
    }
  };

  getQuantity = () => {
    return this.count;
  };

  onBuy = () => {
    this.showConfirmation = true;
  };

  closeConfirmation = () => {
    this.showConfirmation = false;
  };

  fetchTea(id: number) {
    if (id) {
      this.teaService.getTeaById(id).subscribe((data: any) => {
        if (!data) {
          alert("Invalid Id");
          window.location.href = "/";
        }
        console.log("By Id");
        this.tea = data;
        console.log(data);
      });
    } else {
      alert("Invalid Id");
      window.location.href = "/";
    }
  }
}
