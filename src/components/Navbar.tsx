import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
        {/* Search bar */}
        <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[]1.5px ring-gray-300 px-2">
            <Image src="/search.png" alt="search" width={14} height={14} />
            <input 
                type="text" 
                placeholder="Search..." 
                className="ml-2 p-1 border rounded-md focus:outline-none focus:border-blue-500"/>
        </div>

        {/* User profile */}
        <div className='flex items-center gap-6 justify-end w-full'>
            <div className='bg-white flex items-center justify-center w-7 h-7 rounded-md shadow-md cursor-pointer'>
                <Image src="/message.png" alt="" width={20} height={20} className='inline-block mr-4' />
            </div>
            <div className='bg-white flex items-center justify-center w-7 h-7 rounded-md shadow-md cursor-pointer relative'>
                <Image src="/announcement.png" alt="" width={20} height={20} className='inline-block mr-4' />
                <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
            </div>
            <div className='flex flex-col'>
                <span className='text-xs leading-3 font-medium'>John Doe</span>
                <span className='text-[10px] text-blue-500 text-right'>Admin</span>
            </div>
            <Image src="/avatar.png" alt="" width={36} height={36} className='rounded-full cursor-pointer' />

        </div>
    </div>
  )
}

export default Navbar