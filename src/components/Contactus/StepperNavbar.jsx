// Navbar.js 

export default function StepperNavbar() { 
	return ( 
		<div> 
			<nav className="fixed w-full 
								z-20 top-0 left-0 h-24  bg-gray-200"> 
				<div className="flex flex-wrap items-center  
								justify-between mx-auto p-4"> 
					<a 
					className="flex items-center"> 
						<img src= 
"https://www.svgrepo.com/show/343884/ecommerce-online-shopping.svg"
							className="mr-2 w- h-7"
							alt="GFG Logo" /> 
						<span className="self-center text-2xl font-semibold "> 
							Ecommerce Site
						</span> 
					</a> 
					<div className="items-center justify-between hidden 
									w-full md:flex md:w-auto md:order-1"
						id="navbar-sticky"> 
						<ul className="flex flex-col p-4 
									md:p-0 font-medium 
									md:flex-row md:space-x-8"> 
							
							<li> 
								<a href="/contactus"
								className="block py-2 pl-3 
											pr-4 text-gray-900 rounded 
											hover:bg-gray-100 
											md:hover:bg-transparent 
											md:hover:text-blue-700 md:p-0"> 
									Contact us 
								</a> 
							</li> 
							<li> 
								<a href="/aboutus"
								className="block py-2 pl-3 
											pr-4 text-gray-900 rounded 
											hover:bg-gray-100 
											md:hover:bg-transparent 
											md:hover:text-blue-700 md:p-0"> 
									About us 
								</a> 
							</li> 
						</ul> 
					</div> 
				</div> 
			</nav> 
		</div> 
	) 
}
