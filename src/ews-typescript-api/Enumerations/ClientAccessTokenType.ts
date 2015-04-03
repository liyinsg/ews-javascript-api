module Microsoft.Exchange.WebServices.Data {
    export enum ClientAccessTokenType {
        CallerIdentity = 0,
        ExtensionCallback = 1,
        ScopedToken = 2
    }
}

import _export = Microsoft.Exchange.WebServices.Data.ClientAccessTokenType;
export = _export;
