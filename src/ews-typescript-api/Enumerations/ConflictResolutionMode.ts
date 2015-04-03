module Microsoft.Exchange.WebServices.Data {
    export enum ConflictResolutionMode {
        NeverOverwrite = 0,
        AutoResolve = 1,
        AlwaysOverwrite = 2
    }
}

import _export = Microsoft.Exchange.WebServices.Data.ConflictResolutionMode;
export = _export;
