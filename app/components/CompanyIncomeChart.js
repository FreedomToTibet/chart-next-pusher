'use client';

import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import ChartButton from '@/app/components/ChartButton';
// import Toggle3DButton from '@/app/components/Toggle3DButton';

export default function CompanyIncome() {
	const initialData = [
		[1965, 360202],
		[1966, 400123],
		[1967, 460331],
		[1968, 460346],
		[1969, 460339],
		[1970, 460370],
	];

	const chartRef = useRef(null);
	const [chartData, setChartData] = useState([...initialData]);
	// const [toggle3D, setToggle3D] = useState(false);

	useEffect(() => {
		// Dynamically import Highcharts and its 3D module
		import('highcharts/highcharts-3d').then((Highcharts3D) => {
			import('highcharts').then((Highcharts) => {
				Highcharts3D.default(Highcharts.default);

				chartRef.current = Highcharts.default.chart('chart-container', {
					colors: ['#F3F7FB', '#F3F7FB'],
					chart: {
						style: {
							fontFamily: ['Prompt', 'sans-serif'],
							fontSize: '16px',
						},
						type: 'column',
						// options3d: {
						//   enabled: toggle3D,
						//   alpha: 10,
						//   beta: 25,
						//   depth: 70,
						//   viewDistance: 25,
						// },
						backgroundColor: {
							linearGradient: [0, 0, 500, 500],
							stops: [
								[0, 'rgb(128, 130, 221)'],
								[1, 'rgb(128, 130, 221)'],
							],
						},
					},
					title: {
						text: 'COMPANY ANNUAL INCOME',
						style: {
							fontSize: '27px',
						},
					},
					xAxis: {
						title: {
							text: 'Year',
							style: {
								fontSize: '18px',
							},
						},
						categories: chartData.map((data) => data[0]),
					},
					yAxis: {
						title: {
							text: 'Income',
							style: {
								fontSize: '18px',
							},
						},
					},
					series: [
						{
							name: 'Income',
							data: chartData.map((data) => data[1]),
						},
					],
				});
			});
		});
	}, [chartData]);

	useEffect(() => {
		axios.get('/
}