export interface IWorkStatus {
    employeeName: string;
    timeStarted: string;
    operatorCode: string;
    estimatedCompletionTime: string;
}

export interface IWorkOrder {
    assetNumber: string;
    workOrderNumber: string;
    open: string;
    downTime: string;
    description: string[];
    workStatus: IWorkStatus;
    completionStatus: string;
}
