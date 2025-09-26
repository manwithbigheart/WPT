//-----------------------------------------------------------

    // why oops got introduced:
    // - to provide code reusabilty 
    // - code reusabilty 
    // - modular structure

    // Class: Collection of data member and member function
    //        It is a template that we can reuse.
    //        To create class we use Class keyword.
    //        Class name always starts with Capital letter.


    // --------------------- Creating a Class -----------------

   export class Person{
      // data member
      pname = "Rahul";
      pcontact = 9876543210;
      paddress = "Mumbai";

  //----------------------------1st Method to create Member function-------------------
      // member function
    //   personDetails = function(){
    //     console.log("Name: "+this.pname);
    //     console.log("Contact: "+this.Pcontact);
    //     console.log("Address: "+this.Paddress);
    //   }
    

  // --------------------- Creating member function -----------------

    personDetails(){
        return `name:${this.pname} contact:${this.pcontact} address:${this.paddress}`;
    }
    }
  //-----------------------------------------------------------
  // --------------------- Creating Object -----------------
    // Object: Instance of a class
    //         Collection of data.
    //         It is a real world entity. 
    //         To create object we use new keyword.
    //         Object name always starts with small letter.

   // Using default values
let personobj = new Person();
console.log(personobj.personDetails()); 
// Output: name: Rahul, contact: 987654433, address: Mumbai

// Using custom values
let personobj1 = new Person("Junaid", 2222, 'Mumbai');
console.log(personobj1.personDetails());
// Output: name: Junaid, contact: 2222, address: Mumbai 



// export default {Person};
//-----------------------------------------------------------