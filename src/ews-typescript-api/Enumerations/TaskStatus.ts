module Microsoft.Exchange.WebServices.Data {
    export enum TaskStatus {
        NotStarted = 0,
        InProgress = 1,
        Completed = 2,
        WaitingOnOthers = 3,
        Deferred = 4
    }
}

import _export = Microsoft.Exchange.WebServices.Data.TaskStatus;
export = _export;
