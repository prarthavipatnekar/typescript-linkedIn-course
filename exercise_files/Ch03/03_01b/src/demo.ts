type ContactName = string;
type ContactBirthDate = Date | number | string;
type AddressableContact = Contact & Address; //combine contact and address i.e interface Contact extends Address

enum ContactStatusEnum {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}
//above can also be written as

type ContactStatus =  "active" | "inactive" | "new";


interface Contact{
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate//allow multiple types
    status?: ContactStatus;
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}

let primaryContact: Contact = {
    id: 12345,
    name: "active"
}
