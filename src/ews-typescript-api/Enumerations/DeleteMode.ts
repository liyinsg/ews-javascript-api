module Microsoft.Exchange.WebServices.Data {
    export enum DeleteMode {
        HardDelete = 0,
        SoftDelete = 1,
        MoveToDeletedItems = 2
    }
}

import _export = Microsoft.Exchange.WebServices.Data.DeleteMode;
export = _export;
