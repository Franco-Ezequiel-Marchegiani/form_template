// third-party
import Chart from 'react-apexcharts';

// project imports
import ChartDataMonth from '../chart-data/total-order-month-line-chart';
import ChartDataYear from '../chart-data/total-order-year-line-chart';

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalOrderLineChartCard = ({ timeValue }) => {
    return <>{timeValue ? <Chart {...ChartDataMonth} /> : <Chart {...ChartDataYear} />}</>;
};

export default TotalOrderLineChartCard;
