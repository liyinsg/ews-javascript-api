module Microsoft.Exchange.WebServices.Data {
    export enum MailboxType {
        Unknown = 0,
        OneOff = 1,
        Mailbox = 2,
        PublicFolder = 3,
        PublicGroup = 4,
        ContactGroup = 5,
        Contact = 6
    }
}

import _export = Microsoft.Exchange.WebServices.Data.MailboxType;
export = _export;
