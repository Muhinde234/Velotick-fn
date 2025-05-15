
import { Search } from "lucide-react";


export default function SearchBar() {
  return (
    <div className="flex items-center w-full max-w-md bg-gray-200 rounded-full ">
      <div className="bg-gray-300  rounded-full p-2 flex items-center justify-center">
        <Search className="h-4 w-4  text-white" />
      </div>
    
      <input
      type="text"
      placeholder=" Search"
      className="ml-3 py-2 px-2 text-sm w-full focus:outline-none
      placeholder:text-gray-500"
       />
    </div>
  );
}
