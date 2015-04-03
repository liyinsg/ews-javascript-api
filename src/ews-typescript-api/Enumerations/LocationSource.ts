module Microsoft.Exchange.WebServices.Data {
    export enum LocationSource {
        None = 0,
        LocationServices = 1,
        PhonebookServices = 2,
        Device = 3,
        Contact = 4,
        Resource = 5
    }
}

import _export = Microsoft.Exchange.WebServices.Data.LocationSource;
export = _export;
