import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import * as buffer from "buffer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(""),
      age: new FormControl("", [this.ageValidator]),
    });
  }

  ageValidator(control: AbstractControl): { ageError: boolean } | null {
    if (control.value < 15) {
      return { ageError: true };
    }
    return null;
  }

  send(form: FormGroup): void {
    console.log(form);
  }
}
