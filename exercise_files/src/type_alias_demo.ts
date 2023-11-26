
interface Contact2 {
    id: number;
    birthDate?: Date; //optional
    status: ContactStatus;
    clone(name: string): Contact
}
enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
} 

// let primaryContact2: Contact2 = {
//     birthDate: new Date(),
//     id: 123,
//     name: "Jamie",
//     status: ContactStatus.Active // enums are available at run time

// }

// function clone(source: Contact2, func: (source: Contact) => Contact) : Contact2{
//     return Object.apply({}, source);
// }

// const aContact: Contact2 = { birthDate: new Date(),
//     id: 123,
//     name: "Jamie",
//     status: ContactStatus.Active 
// }
// const bContact = clone(b);
// type ContactName = string //type alias

