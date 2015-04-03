module Microsoft.Exchange.WebServices.Data {
    export enum EventType {
        Status = 0,
        NewMail = 1,
        Deleted = 2,
        Modified = 3,
        Moved = 4,
        Copied = 5,
        Created = 6,
        FreeBusyChanged = 7
    }
}

import _export = Microsoft.Exchange.WebServices.Data.EventType;
export = _export;
