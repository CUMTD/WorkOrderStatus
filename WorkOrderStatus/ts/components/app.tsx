import * as React from 'react';

import { PureComponent } from 'react';

import WorkOrderGroup from './workOrderGroup';

import { IWorkOrderGroup } from '../types/workOrder';

import { WorkOrderApi } from '../api/workOrderApi';

interface Props {
}

interface State {
	currentIndex: number;
	pages: IWorkOrderGroup[][];
}


type Heights = { [key: string]: number };

export class App extends PureComponent<Props, State> {


	private static readonly UPDATE_INTERVAL: number = 10000;

	private static readonly PAGE_HEIGHT: number = 1040;

	private static readonly HEIGHTS: Heights = {
		header: 51,
		th: 38,
		tr: 40,
		bottomMargin: 30
	};

	private timer: number;

	constructor(props: Props, context: any) {
		super(props, context);
		this.state = {
			currentIndex: 0,
			pages: []
		};
	}

	public render(): JSX.Element[] {
		if (this.state.pages == null || this.state.pages.length === 0 || this.state.pages[0] == null || this.state.pages[0].length === 0) {
			return new Array<JSX.Element>();
		}

		return this
			.state
			.pages[this.state.currentIndex]
			.map((wo: IWorkOrderGroup) => <WorkOrderGroup {...wo} key={`${wo.status}`} />);
	}

	public componentDidMount(): void {
		this.update();
	}

	private update: () => Promise<void> = async () => {
		console.log('updating');
		try {
			const groups: IWorkOrderGroup[] = await WorkOrderApi.getOpen();
			const pages: IWorkOrderGroup[][] = this.toPages(groups);
			this.setState({ ...this.state, pages, currentIndex: 0 }, this.startTimer);
		} catch(ex) {
			console.log('Can\'t load work orders', ex);
		}
	};

	private calculateGroupHeight: (group: IWorkOrderGroup) => number = (group: IWorkOrderGroup) => {
		if (group == null || group.workOrders.length === 0) {
			return 0;
		}

		const heights: Heights = App.HEIGHTS;
		const base: number = heights['header'] + heights['th'] + heights['bottomMargin'];

		return base + (heights['tr'] * group.workOrders.length);
	};

	private toPages: (groups: IWorkOrderGroup[]) => IWorkOrderGroup[][] = (groups: IWorkOrderGroup[]) => {
		if (groups == null || groups.length === 0) {
			return [];
		}

		const pages: IWorkOrderGroup[][] = [];

		let remainingHeight: number = App.PAGE_HEIGHT;
		let currentPage: IWorkOrderGroup[] = [];
		for (let i: number = 0; i < groups.length; i++) {
			const group: IWorkOrderGroup = groups[i];
			const pageHeight: number = this.calculateGroupHeight(group);
			remainingHeight -= pageHeight;

			// we have to add at least one group to a page
			if (currentPage.length > 0 && remainingHeight <= 0) {
				pages.push(currentPage);
				currentPage = [group];
				remainingHeight = App.PAGE_HEIGHT - remainingHeight;
			} else {
				currentPage.push(group);
			}
		}
		pages.push(currentPage);

		return pages;
	};

	private clearTimer: () => void = () => {
		if (this.timer != null) {
			window.clearTimeout(this.timer);
		}
	}

	private startTimer: () => void = () => {
		this.clearTimer();
		this.setState({ ...this.state, currentIndex: 0 }, () => {
			this.timer = window.setTimeout(this.tickTimer, App.UPDATE_INTERVAL);
		});
	};

	private tickTimer: () => void = () => {
		this.clearTimer();
		if (this.state.currentIndex !== 0 && this.state.currentIndex === this.state.pages.length - 1) {
			this.update();
		} else {
			this.setState({ ...this.state, currentIndex: this.state.currentIndex + 1 }, () => {
				this.timer = window.setTimeout(this.tickTimer, App.UPDATE_INTERVAL);
			});
		}
	};

}
