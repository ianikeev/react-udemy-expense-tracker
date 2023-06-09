import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(item => item.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
          />);
      })}
    </div>
  );
};

export default Chart;