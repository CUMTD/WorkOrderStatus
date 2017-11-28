import * as React from 'react';

import { SFC } from 'react';

import { IWorkOrder, IWorkStatus } from '../types/workOrder';

interface Props extends IWorkOrder { }

const renderDescription: (description: string[]) => JSX.Element = (description: string[]) => {
    if (description == null || description.length === 0) {
        return <td></td>;
    }
    return <td className="description-cell">
		<span>
        {''.concat(...description)}
        </span>
    </td>;

};

const renderWorkStatus: (ws: IWorkStatus) => JSX.Element[] = (ws: IWorkStatus) => {
    if (ws == null) {
		return null;
    }
    return [
        <td className="status split" key="en">{ws.employeeName}</td>,
        <td className="status" key="ts">{ws.timeStarted}</td>,
        <td className="status" key="oc">{ws.operatorCode}</td>
    ];
};

const WorkOrder: SFC<Props> = (props: Props) => <tr>
    <td>{props.assetNumber}</td>
    <td>{props.workOrderNumber}</td>
    <td>{props.open}</td>
    <td>{props.downTime}</td>
    {renderDescription(props.description)}
    {renderWorkStatus(props.workStatus)}
</tr>;

export default WorkOrder;
