module Microsoft.Exchange.WebServices.Data {
    export enum SendCancellationsMode {
        SendToNone = 0,
        SendOnlyToAll = 1,
        SendToAllAndSaveCopy = 2
    }
}

import _export = Microsoft.Exchange.WebServices.Data.SendCancellationsMode;
export = _export;
