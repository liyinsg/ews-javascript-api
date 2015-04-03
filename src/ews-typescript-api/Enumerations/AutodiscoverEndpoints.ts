module Microsoft.Exchange.WebServices.Data {
    export enum AutodiscoverEndpoints {
        None = 0,
        Legacy = 1,
        Soap = 2,
        WsSecurity = 4,
        WSSecuritySymmetricKey = 8,
        WSSecurityX509Cert = 16,
        OAuth = 32
    }
}

import _export = Microsoft.Exchange.WebServices.Data.AutodiscoverEndpoints;
export = _export;
