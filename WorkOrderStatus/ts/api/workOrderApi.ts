import { IWorkOrderGroup } from '../types/workOrder';

export namespace WorkOrderApi {

    const OPEN_URL: string = '/work-orders/open/';

    export async function getOpen(): Promise<IWorkOrderGroup[]> {
        const init: RequestInit = {
            method: 'GET',
            credentials: 'same-origin'
        };
        const request: Request = new Request(OPEN_URL, init);
		const response: Response = await fetch(request);

	    if (response.status !== 200) {
		    throw response.status;
		}

        const json: IWorkOrderGroup[] = (await response.json()) as IWorkOrderGroup[];
        return json;
    };

}
