import { MdOutlineClear } from "react-icons/md";

type Props = {
  onClick?: () => void;
  className?: string;
  size?: number;
};

const ClearButton: React.FC<Props> = ({ className, size = 20}) => {
  return (
    <div
    >
      <MdOutlineClear className={className} size={size}/>
    </div>
  );
};

export default ClearButton;
