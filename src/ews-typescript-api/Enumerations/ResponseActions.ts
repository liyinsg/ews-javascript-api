module Microsoft.Exchange.WebServices.Data {
    export enum ResponseActions {
        None = 0,
        Accept = 1,
        TentativelyAccept = 2,
        Decline = 4,
        Reply = 8,
        ReplyAll = 16,
        Forward = 32,
        Cancel = 64,
        RemoveFromCalendar = 128,
        SuppressReadReceipt = 256,
        PostReply = 512
    }
}

import _export = Microsoft.Exchange.WebServices.Data.ResponseActions;
export = _export;
