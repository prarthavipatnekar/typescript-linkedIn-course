let x: Record<string, string | number | boolean |  Function> = { name: "Wruce Bayne" };
x.id = 123;
x.active = true;
x.log = () => console.log("test");

//record type
//define some struct and type without having to define every property's type
//syntax : generic syntax with two generic parameters
//first param - possible property values
//2nd param - possible property types



////////////////////

type ContactStatus = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
}

interface Query {
    sort?: 'asc' | 'desc';
    matches(val): boolean;
}


function searchContacts(contacts: Contact[], query: Record<keyof Contact, Query>) {
    return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact)[]) {
            // get the query object for this property
            const propertyQuery = query[property];
            // check to see if it matches
            if (propertyQuery && propertyQuery.matches(contact[property])) {
                return true;
            }
        }

        return false;
    })
}

const filteredContacts = searchContacts(
    [/* contacts */],
    {
        id: { matches: (id) => id === 123 },
        name: { matches: (name) => name === "Carol Weaver" }
        
    }
);