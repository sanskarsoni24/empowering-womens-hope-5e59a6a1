
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="w-10 h-10 mr-2 rounded-full bg-pink-dark flex items-center justify-center text-white font-bold">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 3C19.538 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.36 3 11 4 12 5C13 4 14.64 3 16.5 3Z" fill="white" />
          <path d="M12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.1716 8.5 10.5 9.17157 10.5 10C10.5 10.8284 11.1716 11.5 12 11.5Z" fill="#9857B3" />
          <path d="M12 15.5C12.8284 15.5 13.5 14.8284 13.5 14C13.5 13.1716 12.8284 12.5 12 12.5C11.1716 12.5 10.5 13.1716 10.5 14C10.5 14.8284 11.1716 15.5 12 15.5Z" fill="#9857B3" />
          <path d="M16 13.5C16.8284 13.5 17.5 12.8284 17.5 12C17.5 11.1716 16.8284 10.5 16 10.5C15.1716 10.5 14.5 11.1716 14.5 12C14.5 12.8284 15.1716 13.5 16 13.5Z" fill="#9857B3" />
          <path d="M8 13.5C8.82843 13.5 9.5 12.8284 9.5 12C9.5 11.1716 8.82843 10.5 8 10.5C7.17157 10.5 6.5 11.1716 6.5 12C6.5 12.8284 7.17157 13.5 8 13.5Z" fill="#9857B3" />
        </svg>
      </div>
      <div className="text-pink-dark font-bold text-xl">Cancer Care for Her</div>
    </Link>
  );
};

export default Logo;
