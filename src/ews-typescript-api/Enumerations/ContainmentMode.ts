module Microsoft.Exchange.WebServices.Data {
    export enum ContainmentMode {
        FullString = 0,
        Prefixed = 1,
        Substring = 2,
        PrefixOnWords = 3,
        ExactPhrase = 4
    }
}

import _export = Microsoft.Exchange.WebServices.Data.ContainmentMode;
export = _export;
