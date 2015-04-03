module Microsoft.Exchange.WebServices.Data {
    export enum FolderTraversal {
        Shallow = 0,
        Deep = 1,
        SoftDeleted = 2
    }
}

import _export = Microsoft.Exchange.WebServices.Data.FolderTraversal;
export = _export;
