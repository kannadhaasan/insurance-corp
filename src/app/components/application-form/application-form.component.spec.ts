import { ApplicationFormComponent } from './application-form.component';
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

describe('ApplicationFormComponent', () => {
  let component: ApplicationFormComponent;
  let formBuilderSpy: any; let formBuilder: FormBuilder; let snackSpy: any; let datePipeSpy: any;

  beforeEach(() => {
    const date = new Date();
    component = new ApplicationFormComponent(
      formBuilderSpy = jasmine.createSpyObj('FormBuilder', ['group', 'controls', 'valid', 'get']),
      snackSpy = jasmine.createSpyObj("", [""]),
      datePipeSpy = jasmine.createSpyObj("", [""])
    )
  });

 
  it('Formbulder should set values as expected and should return valid object', () => {// Positve case
    let date = new Date();
    spyOn(component, 'onSubmit');

    const mockFormGroup : FormGroup = new FormGroup({
      firstName: new FormControl("Kanna", [Validators.required]),
      lastName: new FormControl('Babu') ,
      email: new FormControl('kannadhasanb@gmail.com', [Validators.email, Validators.required]) ,
      contactNo: new FormControl('1234567898', [Validators.required]) ,
      date: new FormControl(date, [Validators.required]) ,
      products: new FormControl('Individual Life', [Validators.required]) 
    })
    component.formGroup = mockFormGroup;
    const form: FormGroupDirective = new FormGroupDirective([], []); 
    
    component.onSubmit(form);
    expect(component.formGroup.controls['firstName'].valid).toBe(true);
    expect(component.formGroup.controls['lastName'].valid).toBe(true);
    expect(component.formGroup.controls['email'].valid).toBe(true);
    expect(component.formGroup.controls['contactNo'].valid).toBe(true);
    expect(component.formGroup.controls['date'].valid).toBe(true);
    expect(component.formGroup.controls['products'].valid).toBe(true);
  });

  it('Formbulder should set values as expected and should not return valid object', () => {// Negative case
    spyOn(component, 'onSubmit');
    let form: any;
    component.onSubmit(form);
    expect(component.isFormSubmitted).toBe(false);

  });

});
