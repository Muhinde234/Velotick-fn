
import { Search } from "lucide-react";
import  Input from "./input";

export default function SearchBar() {
  return (
    <div className="flex items-center w-full max-w-md bg-gray-100 rounded-full px-4 py-2 shadow-sm">
      <div className="bg-gray-300 rounded-full p-2 flex items-center justify-center">
        <Search className="h-4 w-4 text-white" />
      </div>
    
      <Input
      type="text"
      placeholder=" Search"
      className="ml-3 bg-transparent focus:outline-none text-sm w-full placeholder-gray-500"
       />
    </div>
  );
}
