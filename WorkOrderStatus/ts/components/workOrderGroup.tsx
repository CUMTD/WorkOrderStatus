import * as React from 'react';

import { SFC } from 'react';

import { IWorkOrderGroup, IWorkOrder } from '../types/workOrder';

import WorkOrder from './workOrder';

interface Props extends IWorkOrderGroup { }

const WorkOrderGroup: SFC<Props> = (props: Props) => {

	const hasStatus: boolean = props.workOrders.filter((wo: IWorkOrder) => wo.workStatus !== null).length > 0;

	const renderEmployeeColInfo: () => JSX.Element[] = () => {
		if (hasStatus) {
			return [
				<col className="employee" key="employee" />,
				<col className="start" key="start" />,
				<col className="op" key="op" />
			];

		}
		return null;
	};

	const renderEmployeeHeaderInfo: () => JSX.Element[] = () => {
		if (hasStatus) {
			return [
				<th key="emp">Employee</th>,
				<th key="ts">Time Started</th>,
				<th key="opcode">Op. Code</th>
			];
		}
		return null;
	};

	return <section className="group">
		<h2>{props.status}</h2>
		<table className={hasStatus ? 'status' : 'no-status'}>
			<colgroup>
				<col className="asset" />
				<col className="wo" />
				<col className="open" />
				<col className="down" />
				<col className="description" />
				{renderEmployeeColInfo()}
			</colgroup>
			<thead>
				<tr>
					<th>Asset #</th>
					<th>WO #</th>
					<th>Open</th>
					<th>Down Time</th>
					<th>Description</th>
					{renderEmployeeHeaderInfo()}
				</tr>
			</thead>
			<tbody>
				{props.workOrders.map((wo: IWorkOrder) => <WorkOrder {...wo} key={`${wo.assetNumber}-${wo.workOrderNumber}`} />)}
			</tbody>
		</table>
	</section>;
};

export default WorkOrderGroup;
