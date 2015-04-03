module Microsoft.Exchange.WebServices.Data {
    export enum ResolveNameSearchLocation {
        DirectoryOnly = 0,
        DirectoryThenContacts = 1,
        ContactsOnly = 2,
        ContactsThenDirectory = 3
    }
}

import _export = Microsoft.Exchange.WebServices.Data.ResolveNameSearchLocation;
export = _export;
