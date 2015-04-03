//todo - move to file where class Microsoft.Exchange.WebServices.Data.NonIndexableItem is located
module Microsoft.Exchange.WebServices.Data {
    export enum ItemIndexError {
        None = 0,
        GenericError = 1,
        Timeout = 2,
        StaleEvent = 3,
        MailboxOffline = 4,
        AttachmentLimitReached = 5,
        MarsWriterTruncation = 6
    }
}

import _export = Microsoft.Exchange.WebServices.Data.ItemIndexError;
export = _export;
