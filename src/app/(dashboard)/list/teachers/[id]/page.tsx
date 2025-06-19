


import Announcements from '@/components/Announcements';
import BigCalendar from '@/components/BigCalendar';
import Performance from '@/components/Performance';
import Image from 'next/image';
import Link from 'next/link';

const SingleTeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
        {/* Left */}
        <div className="w-full xl:w-2/3">
        
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-4">
        {/* User Info Card */}
        <div className="bg-buriiSky py-6 px-4 rounded-md flex-1 flex gap-4">
          <div className="w-1/3">
          <Image src="/date.png"
            alt="" width={144} 
            height={144} 
            className="w-36 h-36 rounded-full object-cover"
          />
          </div>
          <div className="w-2/3 flex flex-col justify-between gap-4">
          <h1 className='text-xl font-semibold'>Henry B</h1>
          <p className='text-sm text-gray-500'>I shall be taking you through AI classes. 
            I have over 5 years of experience.
          </p>
          <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
              <Image src="/blood.png" alt="" width={14} height={14} />
              <span>B+</span>
            </div>
            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
              <Image src="/date.png" alt="Blood Type" width={14} height={14} className="inline-block mr-1" />
              <span>June 2025</span>
            </div>
            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
              <Image src="/mail.png" alt="Blood Type" width={14} height={14} className="inline-block mr-1" />
              <span>user@gmail.com</span>
            </div>
            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
              <Image src="/phone.png" alt="Blood Type" width={14} height={14} className="inline-block mr-1" />
              <span>+2540000</span>
            </div>
          </div>
          
          </div>
        </div>
        {/* Small Card */}
        <div className="flex-1 flex gap-4 justify-between flex-wrap">
          {/* Card */}
          <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
            <Image src="/singleAttendance.png" alt="Attendance" width={24} height={24} className="w-6 h-6" />
            <div className=''>
              <h1 className='text-xl font-semibold'>90%</h1>
              <span className='text-sm text-gray-400'>Attendance</span>

            </div>

          </div>
          {/* Card */}
          <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
            <Image src="/singleClass.png" alt="Attendance" width={24} height={24} className="w-6 h-6" />
            <div className=''>
              <h1 className='text-xl font-semibold'>6</h1>
              <span className='text-sm text-gray-400'>Classes</span>

            </div>

          </div>
          {/* Card */}
          <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
            <Image src="/singleBranch.png" alt="Attendance" width={24} height={24} className="w-6 h-6" />
            <div className=''>
              <h1 className='text-xl font-semibold'>3</h1>
              <span className='text-sm text-gray-400'>Branches</span>

            </div>

          </div>
          {/* Card */}
          <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
            <Image src="/singleLesson.png" alt="Attendance" width={24} height={24} className="w-6 h-6" />
            <div className=''>
              <h1 className='text-xl font-semibold'>5</h1>
              <span className='text-sm text-gray-400'>Lessons</span>

            </div>

          </div>

        </div>

        </div>
        {/* Bottom */}
        <div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendar/>
          </div>



        </div>

        {/* Right */}
        <div className="w-full xl:w-1/3">
        <div className='bg-white p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Shortcuts</h1>
          <div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-500'>
            <Link className='p-3 rounded-md bg-buriiSkyLight' href="/">Teacher&apos;s Classes</Link>
            <Link className='p-3 rounded-md bg-buriiPurpleLight' href="/">Teacher&apos;s Students</Link>
            <Link className='p-3 rounded-md bg-buriiYellowLight' href="/">Teacher&apos;s Lessons</Link>
            <Link className='p-3 rounded-md bg-pink-300' href="/">Teacher&apos;s Exams</Link>
            <Link className='p-3 rounded-md bg-buriiYellow' href="/">Teacher&apos;s Assigments</Link>
          </div>
        </div>
        <Performance/>
        <Announcements/>
        </div>

        
    </div>
  )
};

export default SingleTeacherPage