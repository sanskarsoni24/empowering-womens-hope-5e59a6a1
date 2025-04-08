
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="mr-3 flex items-center justify-center">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tree/flower symbol - enhanced with more organic curves and smoother lines */}
          <path d="M24 8C22 8 20 10 20 12C20 14 22 16 24 16C26 16 28 14 28 12C28 10 26 8 24 8Z" fill="#E879A6" />
          <path d="M24 16C20 16 16 20 16 24C16 28 20 30 24 30C28 30 32 28 32 24C32 20 28 16 24 16Z" fill="#E879A6" />
          <path d="M24 30C18 30 12 34 12 40C12 42 14 44 16 44C18 44 20 42 20 40C20 38 22 36 24 36C26 36 28 38 28 40C28 42 30 44 32 44C34 44 36 42 36 40C36 34 30 30 24 30Z" fill="#E879A6" />
          <path d="M24 4V44" stroke="#9857B3" strokeWidth="1.5" />
        </svg>
      </div>
      
      <div className="flex flex-col">
        <div className="text-2xl font-bold tracking-wider text-pink-dark">CCH</div>
        <div className="text-lg font-medium text-gray-700">Cancer Care for Her</div>
      </div>
    </Link>
  );
};

export default Logo;
