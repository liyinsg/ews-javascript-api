module Microsoft.Exchange.WebServices.Data {
    export enum FlaggedForAction {
        Any = 0,
        Call = 1,
        DoNotForward = 2,
        FollowUp = 3,
        FYI = 4,
        Forward = 5,
        NoResponseNecessary = 6,
        Read = 7,
        Reply = 8,
        ReplyToAll = 9,
        Review = 10
    }
}

import _export = Microsoft.Exchange.WebServices.Data.FlaggedForAction;
export = _export;
