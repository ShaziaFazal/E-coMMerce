import { useDispatch } from "react-redux";
import { changeCategory } from "../../store/User.reducer";

const Navbar = () => {
let category ="";
const dispatch = useDispatch();

const handleOnClick =(e)=>{
  //setCategory(e.target.value);
  category = e.target.value;
  console.log("target value: ",category);
  dispatch(changeCategory(category));
}
  return (
    <div>
      <nav>
        <div className="flex flex-1 items-stretch justify-center sm:items-stretch sm:justify-center my-2 ">
        <button onClick={handleOnClick}  value={"Women"} className="mr-8 ml-10 cursor-pointer">Women</button>
        <button onClick={handleOnClick}  value="Men" className="mr-8 ml-10 cursor-pointer">Men</button>
        <button onClick={handleOnClick}  value="Kids" className="mr-8 ml-10 cursor-pointer">Kids</button>
        <button onClick={handleOnClick}  value="Accessories" className="mr-8 ml-10 cursor-pointer">Accessories</button>
       
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
