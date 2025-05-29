"use client";
import Image from 'next/image';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 100,
    fill: '#f3f4f6', // Light gray background
  },
  {
    name: 'Boys',
    count: 55,
    fill: '#3b82f6', // Blue color for boys
  },
  {
    name: 'Girls',
    count: 45,
    fill: '#fbbf24', // Yellow color for girls
  },
];

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-[450px] p-4 flex flex-col'>
      {/* TITLE */}
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src='/moreDark.png' alt='' width={20} height={20}/>
      </div>
      
      {/* CHART - Increased height significantly */}
      <div className='w-full h-[200px] flex justify-center items-center'>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart 
            cx="50%" 
            cy="50%" 
            innerRadius="30%" 
            outerRadius="80%" 
            barSize={15} 
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
              cornerRadius={5}
            />

          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      
      {/* BOTTOM */}
      <div className='flex justify-center gap-16 mt-4'>
        <div className='flex flex-col gap-1 items-center'>
          <div className='w-5 h-5 bg-blue-500 rounded-full' />
          <h1 className='font-bold'>1,234</h1>
          <h2 className='text-xs text-gray-400'>Boys (55%)</h2>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <div className='w-5 h-5 bg-yellow-400 rounded-full' />
          <h1 className='font-bold'>1,034</h1>
          <h2 className='text-xs text-gray-400'>Girls (45%)</h2>
        </div>
      </div>
    </div>
  )
}

export default CountChart