interface Contact extends Address {
    id: number;
    name: string;
    birthDate?: Date; //optional
}

interface Address {
    line1: string;
    region: string;
}

//diff bet interface vs class
//interface only used during compile type and not available at runtime in js

let primaryContact: Contact = {
    birthDate: new Date(),
    id: 123,
    name: "Jamie",
    line1: "test",
    region: "SD"

}


