module Microsoft.Exchange.WebServices.Data {
    export enum MeetingRequestsDeliveryScope {
        DelegatesOnly = 0,
        DelegatesAndMe = 1,
        DelegatesAndSendInformationToMe = 2,
        NoForward = 3
    }
}

import _export = Microsoft.Exchange.WebServices.Data.MeetingRequestsDeliveryScope;
export = _export;
