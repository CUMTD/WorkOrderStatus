import * as React from 'react';

import { PureComponent } from 'react';

import WorkOrder from './workOrder';

import { IWorkOrder } from '../types/workOrder';

import { WorkOrderApi } from '../api/workOrderApi';

interface Props {

}

interface State {
    workOrders: IWorkOrder[];
}

export class App extends PureComponent<Props, State> {

    private static readonly UPDATE_INTERVAL: number = 10000;

    private timer: number;

    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
            workOrders: []
        };
    }

    public render(): JSX.Element[] {
        return this.state.workOrders.map((wo: IWorkOrder) => <WorkOrder {...wo} />);
    }

    public componentDidMount(): void {
        window.setInterval(this.update, App.UPDATE_INTERVAL);
        this.update();
    }

    private update: () => Promise<void> = async () => {
        const workOrders: IWorkOrder[] = await WorkOrderApi.getOpen();
        this.setState({ ...this.state, workOrders });
    };
}
