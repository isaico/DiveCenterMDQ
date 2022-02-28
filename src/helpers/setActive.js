 import react,{useState} from "react";
 const [isActive, setActive] = useState(false);
 const toggleClass = () => {
    setActive(!isActive);
  };
 export  default toggleClass