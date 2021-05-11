export class ApplicantDetails {
    public firstName: string;
    public lastName: string;
    public email: string;
    public dob: string;
    public contactNo: string;
    public product: string;

    constructor (item?: ApplicantDetails | any){
        if(item){
            this.firstName = item.firstName;
            this.lastName = item.lastName;
            this.email = item.email;
            this.dob = item.dob;
            this.contactNo = item.contactNo;
            this.product = item.product;
        }
    }

}
