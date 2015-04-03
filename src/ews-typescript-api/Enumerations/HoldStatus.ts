module Microsoft.Exchange.WebServices.Data {
    export enum HoldStatus {
        NotOnHold = 0,
        Pending = 1,
        OnHold = 2,
        PartialHold = 3,
        Failed = 4
    }
}

import _export = Microsoft.Exchange.WebServices.Data.HoldStatus;
export = _export;
