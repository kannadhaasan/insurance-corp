import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, PatternValidator } from '@angular/forms';
import { ApplicantDetails } from '../../types/applicant-details';
import { ProductsService } from '../../service/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {

  public isFormSubmitted: boolean = false;
  public snackBarDuration = 5000;
  applicant: ApplicantDetails = new ApplicantDetails();

  @ViewChild('form') form;

  formGroup = this.formBuilder.group( {
    firstName: ['', [Validators.required]],
    lastName: [''],
    email: ['', [Validators.email, Validators.required]],
    contactNo: ['', [Validators.required]],
    date: ['', [Validators.required]],
    products: ['', [Validators.required]]

  });
 
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
  }

  public onSubmit(form: any){
    if(this.formGroup.invalid){
      return;
    }
    this.applicant.firstName = this.formGroup.controls.firstName.value;
    this.applicant.lastName = this.formGroup.controls.lastName.value;
    this.applicant.email = this.formGroup.controls.email.value;
    this.applicant.contactNo = this.formGroup.controls.contactNo.value;
    this.applicant.dob =   this.datePipe.transform(this.formGroup.controls.date.value);
    this.applicant.product = this.formGroup.controls.products.value;   
    this.isFormSubmitted = true;    
    console.log("print application form", this.applicant);
    this.openSnackBar();
    this.form.resetForm();
  }

  openSnackBar(){
    this.snackBar.open("Form Submitted Successfully", "",{
      duration: this.snackBarDuration
    });
  }
}
