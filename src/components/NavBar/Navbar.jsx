import {useState} from "react";
import Dropdown from "../Dropdown/Dropdown";

const Navbar = () => {
    const [items, setItems] =useState("");
    const [acc,setAcc] =useState("");
    const [deco, setDeco] = useState("");
    const [gro, setGro] = useState("")
    
  return (
    <div>
        <nav >
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center my-2 ">
            
            <Dropdown 
            value={items}
            onChange={(newValue) => setItems(newValue)}
            placeholder="Wear"
            options={["Princes", "Kings", "Queens"]} />

      

        <Dropdown 
            value={acc}
            onChange={(newValue) => setAcc(newValue)}
            placeholder="Accessories"
            options={["Mobiles", "Vehicles", "Shoes"]} />


            <Dropdown 
            value={deco}
            onChange={(newValue) => setDeco(newValue)}
            placeholder="Home Decor"
            options={["Guantlets", "Lights", "Carpets"]} />

        
            <Dropdown 
            value={gro}
            onChange={(newValue) => setGro(newValue)}
            placeholder="Grocery"
            options={["Laundry", "Must Haves", "Sweets"]} />
               
            </div>  
            
        </nav>
    </div>
  );
};

export default Navbar;
