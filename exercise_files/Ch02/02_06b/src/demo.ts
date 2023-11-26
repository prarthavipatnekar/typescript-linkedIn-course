interface Contact {
    id: number;
    name: string;
}

interface Contact2<TExternalId> {
    id: number;
    name: string;
    externalId: TExternalId;
    //loadExternal(): Task<TExternalId>;
}

//T2 extends T1 means T2 must have the same properties in T1
function clone<T1,T2 extends T1>(source: T1): T2 { //generic type
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone<Contact, Contact>(a);


const dateRange = {startDate: new Date()};
const dateRangeCopy = clone(dateRange);