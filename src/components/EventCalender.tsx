"use client";
import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


// TEMPORARY
const events = [
  {
    id: 1,
    title: "AI Workshop",
    time: "12:00 PM - 2:00 PM",
    description: "All Hands on AI for good.",
  },
  {
    id: 2,
    title: "Software Engineering Workshop",
    time: "12:00 PM - 2:00 PM",
    description: "Meeting at students multi-purpose hall.",
  },
  {
    id: 3,
    title: "Data Science Workshop",
    time: "12:00 PM - 2:00 PM",
    description: "Main Computer Lab.",
  },
];



const EventCalender = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-buriiSky even:border-t-buriiPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCalender