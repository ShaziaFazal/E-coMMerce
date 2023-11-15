const Marquee = () => {
  return (
    <div className="bg-[#eff0e6] z-10">
      <div className="flex justify-between px-8 py-2 border-b border-gray-300">
        <div className="  rounded-md">UAN # +92 300-00-00-00-1</div>
        <div className=" rounded-md">
          Free Shipping Above $150 on International Orders
        </div>
        <div className=" rounded-md">
          <a href="mailto:webmaster@example.com">CustomerCase@Store.pk</a>
        </div>
      </div>

      <div className="text-center text-gray-600 font-semibold font-lato font-weight-600 text-xs tracking-wider py-2 ">
        <marquee>
          <p>
            Dear Valued Customer your Order will Be Dispatched within 05 Working
            Days. Thank You!
          </p>
        </marquee>
      </div>
    </div>
  );
};

export default Marquee;
