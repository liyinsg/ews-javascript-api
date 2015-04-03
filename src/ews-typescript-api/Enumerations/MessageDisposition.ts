module Microsoft.Exchange.WebServices.Data {
    export enum MessageDisposition {
        SaveOnly = 0,
        SendAndSaveCopy = 1,
        SendOnly = 2
    }
}

import _export = Microsoft.Exchange.WebServices.Data.MessageDisposition;
export = _export;
