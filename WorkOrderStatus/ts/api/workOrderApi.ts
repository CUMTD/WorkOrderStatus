import { IWorkOrder } from '../types/workOrder';

export namespace WorkOrderApi {

    const OPEN_URL: string = '/work-orders/open/';

    export async function getOpen(): Promise<IWorkOrder[]> {
        const init: RequestInit = {
            method: 'GET',
            credentials: 'same-origin'
        };
        const request: Request = new Request(OPEN_URL, init);
        const response: Response = await fetch(request);
        const json: IWorkOrder[] = (await response.json()) as IWorkOrder[];
        return json;
    };

}
