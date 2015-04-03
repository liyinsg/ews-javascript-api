module Microsoft.Exchange.WebServices.Data {
    export enum ConflictType {
        IndividualAttendeeConflict = 0,
        GroupConflict = 1,
        GroupTooBigConflict = 2,
        UnknownAttendeeConflict = 3
    }
}

import _export = Microsoft.Exchange.WebServices.Data.ConflictType;
export = _export;
