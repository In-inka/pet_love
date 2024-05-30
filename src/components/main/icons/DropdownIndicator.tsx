import CloseSelect from "./CloseSelect";
import OpenSelect from "./OpenSelect";

interface DropdownIndicatorProps {
  isOpen: boolean;
}

const DropdownIndicator: React.FC<
  DropdownIndicatorProps
> = ({ isOpen }) => (
  <div>
    {isOpen ? (
      <OpenSelect className="stroke-black fill-transparent"/>
      
    ) : (
     <CloseSelect className="stroke-black fill-transparent"/>
    )}
  </div>
);

export default DropdownIndicator;
