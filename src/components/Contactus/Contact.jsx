// Contact.js 

import { useState } from "react";
import { useDispatch } from "react-redux";
import { postFeedback } from "../../store/User.reducer";
import Popup from "../PopUp/PopUp";
import { useNavigate } from "react-router-dom";

export default function Contact() { 
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [feedback,setFeedback] = useState({});
	const dispatch = useDispatch();

	const closePopup = () => {
		setIsPopupOpen(false);
	};

	const getFeedbackData = (e) =>{
        setFeedback({...feedback , [e.target.name]: e.target.value});
        //console.log(feedback)
    }
	const handleSubmit =(e)=>{

        e.preventDefault();
        //console.log("feedback",feedback)
        dispatch(postFeedback(feedback));
		setIsPopupOpen(true);
    }

	return ( 
		<div className="py-2 px-4 mx-auto max-w-screen-md"> 
			<h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900"> 
				Contact Us 			</h2> 
			<p className="mb-4 font-light text-left text-gray-500 sm:text-xl"> 
				Got a issue? Want to send feedback? 
				Need details about our Courses? Let us know. 
			</p> 
			<form onSubmit={handleSubmit}> 
				<div className="flex flex-row"> 
					<div className="w-1/2 pr-2 "> 
						<label htmlFor="firstName"	className="block my-2 text-left	text-sm font-medium text-gray-900"> 
							Full Name 
						</label> 
						<input onChange={getFeedbackData} type="text" name="fullName"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter Full Name" required/> 
					</div>
				</div> 
				<div> 
					<label htmlFor="mail"
						className="block my-2 text-left text-sm 
									font-medium text-gray-900"> 
						Your mail 
					</label> 
					<input type="email" name="mail" onChange={getFeedbackData}
						className="shadow-sm bg-gray-50 border 
									border-gray-300 text-gray-900 
									text-sm rounded-lg block w-full p-2.5"
						placeholder="abc@customer.org"
						required /> 
				</div> 
				<div> 
					<label htmlFor="subject" 
						className="block my-2 text-left 
									text-sm font-medium text-gray-900"> 
						Subject 
					</label> 
					<input type="text" name="subject" onChange={getFeedbackData}
						className="block p-3 w-full text-sm 
									text-gray-900 bg-gray-50 rounded-lg 
									border border-gray-300 shadow-sm "
						placeholder="What issue/suggestion do you have?"
						required /> 
				</div> 
				<div > 
					<label htmlFor="message"
						className="block my-2 text-left 
									text-sm font-medium text-gray-900 "> 
						Your message 
					</label> 
					<textarea rows="6" name="message" onChange={getFeedbackData}
							className="block p-2.5 w-full text-sm 
										text-gray-900 bg-gray-50 rounded-lg 
										shadow-sm border border-gray-300 "
							placeholder="Query/Suggestion..."/> 
				</div> 
				<button type="submit"
						className="mt-2 p-2 float-right text-white 
								rounded-lg border-green-600 
								bg-green-600 hover:scale-105"> 
					Send message 
				</button> 
			</form> 
			{isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md text-center z-10">
            <h2 className="text-2xl font-bold mb-4">Email Sent</h2>
            <p>Your email has been sent successfully.</p>
            <button
              onClick={closePopup}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
		</div> 
	) 
}


