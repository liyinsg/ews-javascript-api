module Microsoft.Exchange.WebServices.Data {
    export enum MailboxSearchScopeType {
        LegacyExchangeDN = 0,
        PublicFolder = 1,
        Recipient = 2,
        MailboxGuid = 3,
        AllPublicFolders = 4,
        AllMailboxes = 5,
        SavedSearchId = 6,
        AutoDetect = 7
    }
}

import _export = Microsoft.Exchange.WebServices.Data.MailboxSearchScopeType;
export = _export;
