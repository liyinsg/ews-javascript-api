module Microsoft.Exchange.WebServices.Data {
    export enum UserConfigurationProperties {
        Id = 1,
        Dictionary = 2,
        XmlData = 4,
        BinaryData = 8,
        All = 15
    }
}

import _export = Microsoft.Exchange.WebServices.Data.UserConfigurationProperties;
export = _export;
