import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-confirmation",
  templateUrl: "./confirmation.component.html",
  styleUrls: ["./confirmation.component.css"],
})
export class ConfirmationComponent implements OnInit {
  @Input() onClose: () => void;
  @Input() quantity: number;

  submited: boolean = false;

  constructor() {}

  ngOnInit() {}

  onSubmit = () => {
    this.submited = true;
  };

  close = () => {
    this.onClose();
  };
}
