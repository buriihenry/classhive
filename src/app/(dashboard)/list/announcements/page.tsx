import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import { announcementsData, eventsData, role, } from "@/lib/data";
import FormModal from "@/components/FormModal";

type Announcement = {
  id:number;
  title:string;
  class:number;
  date:string;

}

const columns = [
  {
    header:"Title", 
    accessor: "title",
  },
  {
    header:"Class", 
    accessor: "class", 
  },
 
  {
    header:"Date",
    accessor:"date",
    className: "hidden md:table-cell",
  },
  {
    header:"Actions", 
    accessor: "actions",
  },


];


const AnnouncementListPage = () => {

  const renderRow = (item: Announcement) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-buriiPurpleLight">

      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell p-4">{item.date}</td>
        
     

      <td className="p-4">
        <div className="flex items-center gap-2">
          {role ==="admin" && (
            <>
          <FormModal table="assignment" type="update" data={item}/>
          <FormModal table="assignment" type="delete" id={item.id}/>
          </>
          )}
            
        </div>
      </td>

    </tr>
);
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold"> All Announcement</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-buriiYellow">
              <Image src ="/filter.png" alt="" width={14} height={14}/>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-buriiYellow">
              <Image src ="/sort.png" alt="" width={14} height={14}/>
            </button>
            {role==="admin" && (
              <FormModal table="announcement" type="create"/>
          )}
          </div>
        </div>
      </div> 

      {/* LIST */}
      <Table columns= {columns} renderRow={renderRow} data={announcementsData}/>
      
      {/* Pagination */}

      <Pagination />
      




      </div>
  )
}

export default AnnouncementListPage