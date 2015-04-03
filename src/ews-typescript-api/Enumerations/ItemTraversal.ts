module Microsoft.Exchange.WebServices.Data {
    export enum ItemTraversal {
        Shallow = 0,
        SoftDeleted = 1,
        Associated = 2
    }
}

import _export = Microsoft.Exchange.WebServices.Data.ItemTraversal;
export = _export;
