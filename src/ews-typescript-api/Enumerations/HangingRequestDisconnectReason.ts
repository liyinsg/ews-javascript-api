//todo - move to file where class Microsoft.Exchange.WebServices.Data.HangingServiceRequestBase is located
module Microsoft.Exchange.WebServices.Data {
    export enum HangingRequestDisconnectReason {
        Clean = 0,
        UserInitiated = 1,
        Timeout = 2,
        Exception = 3
    }
}

import _export = Microsoft.Exchange.WebServices.Data.HangingRequestDisconnectReason;
export = _export;
