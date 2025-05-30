"use client";
import Image from 'next/image';

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tue',
    present: 70,
    absent: 50,
  },
  {
    name: 'Wed',
    present: 80,
    absent: 70,
  },
  {
    name: 'Thur',
    present: 90,
    absent: 78,
  },
  {
    name: 'Fri',
    present: 50,
    absent: 30,
  },
 
];

const AttendanceChart = () => {
  return (
    <div className=''>
        <div>
            <h1>Attendance</h1>
            <Image src='/moreDark.png' alt='' width={20} height={20}/>
        </div>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    
  )
}



export default AttendanceChart