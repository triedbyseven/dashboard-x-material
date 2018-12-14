import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  { name: 'Mon', Visits: 2200, Orders: 3400 },
  { name: 'Tue', Visits: 1280, Orders: 2398 },
  { name: 'Wed', Visits: 5000, Orders: 4300 },
  { name: 'Thu', Visits: 4780, Orders: 2908 },
  { name: 'Fri', Visits: 5890, Orders: 4800 },
  { name: 'Sat', Visits: 4390, Orders: 3800 },
  { name: 'Sun', Visits: 4490, Orders: 4300 }
];

const Graph = () => {
  return (
    <ResponsiveContainer width="99%" height={320}>
      <LineChart
        data={data}
        style={{ color: 'white', fontFamily: 'Roboto', marginTop: 15 }}
      >
        <XAxis dataKey="name" stroke="white" />
        <YAxis stroke="white" />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend color="#fff" style={{ color: '#fff' }} />
        <Line type="monotone" dataKey="Visits" stroke="#b721ff" />
        <Line
          type="monotone"
          dataKey="Orders"
          stroke="#21d4fd"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
