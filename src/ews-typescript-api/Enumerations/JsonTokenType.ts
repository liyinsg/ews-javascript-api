//todo - move to file where class Microsoft.Exchange.WebServices.Data.JsonTokenizer is located
module Microsoft.Exchange.WebServices.Data {
    export enum JsonTokenType {
        String = 0,
        Number = 1,
        Boolean = 2,
        Null = 3,
        ObjectOpen = 4,
        ObjectClose = 5,
        ArrayOpen = 6,
        ArrayClose = 7,
        Colon = 8,
        Comma = 9,
        EndOfFile = 10
    }
}

import _export = Microsoft.Exchange.WebServices.Data.JsonTokenType;
export = _export;
