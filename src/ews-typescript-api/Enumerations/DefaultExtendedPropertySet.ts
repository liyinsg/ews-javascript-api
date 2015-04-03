module Microsoft.Exchange.WebServices.Data {
    export enum DefaultExtendedPropertySet {
        Meeting = 0,
        Appointment = 1,
        Common = 2,
        PublicStrings = 3,
        Address = 4,
        InternetHeaders = 5,
        CalendarAssistant = 6,
        UnifiedMessaging = 7,
        Task = 8
    }
}

import _export = Microsoft.Exchange.WebServices.Data.DefaultExtendedPropertySet;
export = _export;
