type ContactStatus = "active" | "inactive" | "new";

//index access type
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

type AweSome = Contact["address"]["postalCode"]; //drill down on the embedded properties

interface ContactEvent {
    contactId: Contact["id"]; 
}

interface ContactDeletedEvent extends ContactEvent { 
}

interface ContactStatusChangedEvent extends ContactEvent { 
    oldStatus: Contact["status"];
    newStatus: Contact["status"];
}

interface ContactEvents {
    deleted: ContactDeletedEvent;
    statusChanged: ContactStatusChangedEvent;
    // ... and so on
}

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}

function handleEvent<T extends keyof ContactEvents>(
    eventName: T,
    handler: (evt: ContactEvents[T]) => void
) {
    if (eventName == "statusChanged") {
        handler({contactId: 1, oldStatus: "active", newStatus: "inactive"})
    }
}

handleEvent("statusChanged", evt => evt);