"use client";
import Image from "next/image";

const FormModal = ({
    table,
    type,
    data,
    id
}:
{
       table:
        | "teacher"
        | "student"
        | "course"
        | "class"
        | "parent"
        | "event"
        | "subject"
        | "assignment"
        | "parent"
        | "exam"
        | "lesson"
        | "attendance"
        | "result"
        | "announcement";
        type: "create" | "update" | "delete";
        data?: any;
        id?: number;
}
) => {

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = type === "create" ? "bg-green-500" : type === "update" ? "bg-yellow-500" : "bg-red-500";
    
  return (
    <> 
    <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`}/>
    <Image src={`/${type}.png`} alt="" width={16} height={16}/>
    </>
  )
}

export default FormModal