import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import { resultsData, role, } from "@/lib/data";
import FormModal from "@/components/FormModal";

type Result = {
  id:number;
  subject:string;
  class:number;
  teacher:string;
  student:string;
  type:"exam" | "assignment";
  date:string;
  score:number
}

const columns = [
  {
    header:"Subject Name", 
    accessor: "name",
  },
  {
    header:"Student", 
    accessor: "student", 
  },
  {
    header:"Score", 
    accessor: "score", 
    className: "hidden md:table-cell",
  },
  {
      header:"Teacher",
      accessor:"teacher",
      className: "hidden md:table-cell",
    },
    {
      header:"Class", 
      accessor: "class", 
      className: "hidden md:table-cell",
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


const ResultListPage = () => {

  const renderRow = (item: Result) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-buriiPurpleLight">

      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.student}</td>
        <td className="hidden md:table-cell p-4">{item.score}</td>
          <td className="hidden md:table-cell p-4">{item.teacher}</td>
      <td className="hidden md:table-cell p-4">{item.class}</td>
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
        <h1 className="hidden md:block text-lg font-semibold"> All Results</h1>
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
              <FormModal table="result" type="create"/>
          )}
          </div>
        </div>
      </div> 

      {/* LIST */}
      <Table columns= {columns} renderRow={renderRow} data={resultsData}/>
      
      {/* Pagination */}

      <Pagination />
      




      </div>
  )
}

export default ResultListPage