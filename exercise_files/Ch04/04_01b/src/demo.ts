let x: Record<string, string | number | boolean | Function> = { name: "Wruce Bayne" }
x.number = 1234
x.active = true
x.log = () => console.log("awesome!")


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
    email: string;
}

interface Query {
    sort?: 'asc' | 'desc';
    matches(val): boolean;
}

//partial helper type - generic type that wraps another type(1st param), copies that type's definitions
//                     but defines all the properties as optional

//required helper type - generic type that wraps another type(1st param), copies that type's definitions
//                     but defines all the properties as required. Opposite of partial helper

//omit  helper type - generic type that wraps another type(1st param), copies that type's definitions
//                     but allows to omit certain properties from that cloned definition(specified by
//                     passing an array of the properties to be omitted as the 2nd param)


//pick helper type -generic type that wraps another type(1st param), copies that type's definitions
//                     but adds only certain properties to the cloned definition(uses the array of 
//                     properties to be picked passed in as the 2nd param). Basically,opposite of the omit.

// type ContactQuery =  Omit<
// Partial<Record<keyof Contact, Query>>, //so that not all properties of Contact need to defined in the ContactQuery
// "address" | "status" //does allow address and status properties to be defined in ContactQuery
// > 

type ContactQuery =  Pick<
Partial<Record<keyof Contact, Query>>, //so that not all properties of Contact need to defined in the ContactQuery
"id" | "name" //only allow id and name to be specified in ContactQuery
> 

type RequiredContactQuery = Required<ContactQuery>

function searchContacts(contacts: Contact[], query: ContactQuery) {
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
        name: { matches: (name) => name === "Carol Weaver" },
    }
);