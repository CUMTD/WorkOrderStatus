import * as React from 'react';

import { SFC } from 'react';

import { IWorkOrder } from '../types/workOrder';

interface Props extends IWorkOrder { }

const WorkOrderComponent: SFC<Props> = (props: Props) => <div className="work-order">
    <div className="heading">
        <h2>
            <span className="an">{props.assetNumber}</span> &ndash; <span className="on">{props.workOrderNumber}</span>
        </h2>
    </div>
    <div className="main">

	</div>
    <div className="status">
        {props.completionStatus}
    </div>
</div>;

export default WorkOrderComponent;
