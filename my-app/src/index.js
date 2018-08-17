import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Charts, ChartContainer, ChartRow, YAxis, LineChart } from "react-timeseries-charts";
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
