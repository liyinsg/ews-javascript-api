module Microsoft.Exchange.WebServices.Data {
    export enum ElcFolderType {
        Calendar = 1,
        Contacts = 2,
        DeletedItems = 3,
        Drafts = 4,
        Inbox = 5,
        JunkEmail = 6,
        Journal = 7,
        Notes = 8,
        Outbox = 9,
        SentItems = 10,
        Tasks = 11,
        All = 12,
        ManagedCustomFolder = 13,
        RssSubscriptions = 14,
        SyncIssues = 15,
        ConversationHistory = 16,
        Personal = 17,
        RecoverableItems = 18,
        NonIpmRoot = 19
    }
}

import _export = Microsoft.Exchange.WebServices.Data.ElcFolderType;
export = _export;
