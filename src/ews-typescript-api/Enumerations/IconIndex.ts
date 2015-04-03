module Microsoft.Exchange.WebServices.Data {
    export enum IconIndex {
        Default = 0,
        PostItem = 1,
        MailRead = 2,
        MailUnread = 3,
        MailReplied = 4,
        MailForwarded = 5,
        MailEncrypted = 6,
        MailSmimeSigned = 7,
        MailEncryptedReplied = 8,
        MailSmimeSignedReplied = 9,
        MailEncryptedForwarded = 10,
        MailSmimeSignedForwarded = 11,
        MailEncryptedRead = 12,
        MailSmimeSignedRead = 13,
        MailIrm = 14,
        MailIrmForwarded = 15,
        MailIrmReplied = 16,
        SmsSubmitted = 17,
        SmsRoutedToDeliveryPoint = 18,
        SmsRoutedToExternalMessagingSystem = 19,
        SmsDelivered = 20,
        OutlookDefaultForContacts = 21,
        AppointmentItem = 22,
        AppointmentRecur = 23,
        AppointmentMeet = 24,
        AppointmentMeetRecur = 25,
        AppointmentMeetNY = 26,
        AppointmentMeetYes = 27,
        AppointmentMeetNo = 28,
        AppointmentMeetMaybe = 29,
        AppointmentMeetCancel = 30,
        AppointmentMeetInfo = 31,
        TaskItem = 32,
        TaskRecur = 33,
        TaskOwned = 34,
        TaskDelegated = 35
    }
}

import _export = Microsoft.Exchange.WebServices.Data.IconIndex;
export = _export;
