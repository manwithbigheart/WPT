import {Person} from './oop.mjs';  

let personobj1 = new Person("Junaid", 2222, 'Mumbai');
console.log(personobj1.pname);
// Output: name: Junaid 
console.log(personobj1.personDetails());
// Output: name: Junaid, contact: 2222, address: Mumbai

import { Person } from "./oop.mjs";
class Employee extends Person{
  empid;
  empComp;
  emppost;

  constructor(name,mobile,address,id,company,post){
    super(name,mobile,address);   
    
    // super :   it reprsent parent class constructor inside child class constructor
    //           it must be first statement in child class constructor

    this.empid = id;
    this.empComp = company;
    this.emppost = post;
  }
  personDetails(){
    return `id:${this.empid} company:${this.empComp} post:${this.emppost} contact:${this.pcontact} address:${this.paddress}`;
  }
   
}
let empobj = new Employee("Amit", 9999, 'Pune',101,'TCS','Developer');
   console.log(empobj.personDetails());
   // Output: id:101 company:TCS post:Developer contact:9999 address:Pune


   // is there anything like private and public in JS?
   // Ans: Yes, we can create private members using # before the member name.
   //      Private members are accessible only within the class.
   //      Public members are accessible from outside the class.
  