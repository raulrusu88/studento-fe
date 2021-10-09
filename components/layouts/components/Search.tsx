import Divider from "../../common/Divider";
import { MapPin, Search as SearchIcon } from "react-feather";

const Search = () => {
  return (
    <div className="w-3/5 h-16 bg-white flex rounded-md px-5 items-center">
      {/* Localization dropdown */}
      <div className="w-1/6 h-full flex justify-center items-center">
        {/* <div className="w-[24px] h-[24px] bg-red-100 mr-2"></div> */}
        <MapPin size={24} className="mr-2 text-blue-700" />
        <p className="font-bold text-light-black text-sm">Anywhere</p>
      </div>
      <Divider />
      {/* Search box */}
      <input
        className="w-full h-full px-3 placeholder-gray-400 placeholder-opacity-50 focus:outline-none focus:bg-gray-50 rounded-md"
        placeholder="Search..."
      />
      <button
        className="w-[24px] h-[24px] ml-2"
        onClick={() => console.log("search button")}
      >
        <SearchIcon size={24} className="text-blue-700" />
      </button>
    </div>
  );
};

export default Search;
