module Microsoft.Exchange.WebServices.Data {
    export enum FreeBusyViewType {
        None = 0,
        MergedOnly = 1,
        FreeBusy = 2,
        FreeBusyMerged = 3,
        Detailed = 4,
        DetailedMerged = 5
    }
}

import _export = Microsoft.Exchange.WebServices.Data.FreeBusyViewType;
export = _export;
