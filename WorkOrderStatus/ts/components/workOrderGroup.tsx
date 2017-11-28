import * as React from 'react';

import { SFC } from 'react';

import { IWorkOrderGroup, IWorkOrder } from '../types/workOrder';

import WorkOrder from './workOrder';

interface Props extends IWorkOrderGroup { }

const WorkOrderGroup: SFC<Props> = (props: Props) => <section className="group">
    <h2>{props.status}</h2>
    <table>
        <colgroup>
            <col className="asset" />
            <col className="wo" />
            <col className="open" />
            <col className="down" />
            <col className="description" />
            <col className="employee" />
            <col className="start" />
            <col className="op" />
        </colgroup>
        <thead>
            <tr>
                <th>Asset #</th>
                <th>WO #</th>
                <th>Open</th>
                <th>Down Time</th>
                <th>Description</th>
                <th>Employee</th>
                <th>Time Started</th>
                <th>Op. Code</th>
            </tr>
        </thead>
        <tbody>
            {props.workOrders.map((wo: IWorkOrder) => <WorkOrder {...wo} />)}
        </tbody>
    </table>
</section>;

export default WorkOrderGroup;
