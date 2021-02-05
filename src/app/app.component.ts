import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  myForm = new FormGroup({
    name: new FormControl(""),
    age: new FormControl("", [this.ageValidator]),
  });
  ageValidator(control: AbstractControl): { ageError: boolean } | null {
    if (control.value < 5) {
      return { ageError: true };
    }
    return null;
  }

  send(myForm: FormGroup): void {
    console.log(myForm.value);
  }
}
