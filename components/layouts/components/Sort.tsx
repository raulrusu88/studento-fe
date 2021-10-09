import { Grid } from "react-feather";
import Divider from "../../common/Divider";

const Sort = () => {
  return (
    <div className="w-full h-14 flex items-center justify-end px-11">
      <p className="mr-2">Sort by: </p>
      <span className="text-blue-700 font-semibold mr-2">Relevance</span>
      <Divider />
      <Grid size={24} className="text-blue-700 ml-2" />
    </div>
  );
};

export default Sort;
