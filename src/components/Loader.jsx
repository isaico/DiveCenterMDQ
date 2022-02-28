// import "./Loader.css"
import { RiLoader3Fill } from "react-icons/ri";
export const Loader = () => {
    return (
        <div className="absolute w-screen h-full flex justify-center items-center bg-gray-100">
           
            
              <RiLoader3Fill class="animate-spin h-20 w-20 text-red-500"></RiLoader3Fill>
           
        </div>
    );
};
