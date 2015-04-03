module Microsoft.Exchange.WebServices.Data {
    export enum ChangeType {
        Create = 0,
        Update = 1,
        Delete = 2,
        ReadFlagChange = 3
    }
}

import _export = Microsoft.Exchange.WebServices.Data.ChangeType;
export = _export;
