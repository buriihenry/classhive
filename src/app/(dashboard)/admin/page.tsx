import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart"
import EventCalender from "@/components/EventCalender";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      {/* UserCards */}
      <div className="flex gap-4 flex-wrap justify-between">
        <UserCard type="student" />
        <UserCard type="teacher" />
        <UserCard type="parent" />
        <UserCard type="staff" />

      </div>
      {/* Middle Charts */}
      <div className="flex gap-4 flex-col lg:flex-row">
        {/* Count Charts */}
        <div className="w-full lg:w-1/3 h-[450px]">
        <CountChart />
        </div>
        
        {/* attendance Charts */}
        <div className="w-full lg:w-2/3 h-[450px]">
        <AttendanceChart />
        </div>

      </div>  
      {/* Bottom Charts */}
      <div className="w-full h-[500px]">
        <FinanceChart />

      </div>
      </div>

      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
      <EventCalender />
      </div>
    </div>
  );
};

export default AdminPage