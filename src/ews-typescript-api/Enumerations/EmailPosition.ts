module Microsoft.Exchange.WebServices.Data {
    export enum EmailPosition {
        LatestReply = 0,
        Other = 1,
        Subject = 2,
        Signature = 3
    }
}

import _export = Microsoft.Exchange.WebServices.Data.EmailPosition;
export = _export;
