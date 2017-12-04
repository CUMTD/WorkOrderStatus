import * as React from 'react';

import { SFC } from 'react';

import { IWorkOrder, IWorkStatus } from '../types/workOrder';

interface Props extends IWorkOrder {
	hasStatus: boolean;
}

const renderWorkStatus: (ws: IWorkStatus[], hasStatus: boolean) => JSX.Element[] = (ws: IWorkStatus[], hasStatus: boolean) => {
	const toKey: (s: IWorkStatus) => string = (s: IWorkStatus) => `${s.employeeName}-${s.timeStarted}-${s.operatorCode}`;

	if (!hasStatus) {
		return null;
	}

	if (ws == null) {
		return [
			<td className="status hidden" colSpan={3} key="none"></td>
		];
	}
	return [
		<td className="status split" key="en">{ws.map((s: IWorkStatus) => <span className="row" key={toKey(s)}>{s.employeeName}</span>)}</td>,
		<td className="status" key="ts">{ws.map((s: IWorkStatus) => <span className="row" key={toKey(s)}>{s.timeStarted}</span>)}</td>,
		<td className="status" key="oc">{ws.map((s: IWorkStatus) => <span className="row" key={toKey(s)}>{s.operatorCode}</span>)}</td>
	];
};

const WorkOrder: SFC<Props> = (props: Props) => <tr>
	<td>{props.assetNumber}</td>
	<td>{props.workOrderNumber}</td>
	<td>{props.open}</td>
	<td>{props.downTime}</td>
	<td className="description-cell"><span>{props.description}</span></td>
	{renderWorkStatus(props.workStatus, props.hasStatus)}
</tr>;

export default WorkOrder;
