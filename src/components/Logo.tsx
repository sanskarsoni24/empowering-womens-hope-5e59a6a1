
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/public/lovable-uploads/a9f0e13c-53c0-4e45-b84e-3e8d04c36ee1.png" 
        alt="Cancer Care for Her Logo" 
        className="h-10 mr-2"
      />
      <div className="text-pink-dark font-bold text-xl">Cancer Care for Her</div>
    </Link>
  );
};

export default Logo;
