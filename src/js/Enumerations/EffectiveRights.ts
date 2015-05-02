module Microsoft.Exchange.WebServices.Data {
    export enum EffectiveRights {
        None = 0,
        CreateAssociated = 1,
        CreateContents = 2,
        CreateHierarchy = 4,
        Delete = 8,
        Modify = 16,
        Read = 32,
        ViewPrivateItems = 64
    }
}

import _export = Microsoft.Exchange.WebServices.Data.EffectiveRights;
export = _export;
