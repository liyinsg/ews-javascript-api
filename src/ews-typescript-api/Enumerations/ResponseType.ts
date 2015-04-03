module Microsoft.Exchange.WebServices.Data {
    export enum MeetingResponseType {
        Unknown = 0,
        Organizer = 1,
        Tentative = 2,
        Accept = 3,
        Decline = 4,
        NoResponseReceived = 5
    }
}

import _export = Microsoft.Exchange.WebServices.Data.MeetingResponseType;
export = _export;
