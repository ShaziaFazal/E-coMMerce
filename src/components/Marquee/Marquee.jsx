

const Marquee = () => {
  return (
    <div>
        <div className="flex justify-between ml-8 mr-8">
            <div className='  rounded-md'>UAN # +92 300-00-00-00-1</div>
            <div className=' rounded-md' >Free Shipping Above $150 on International Orders</div>
            <div className=' rounded-md' ><a href="mailto:webmaster@example.com">CustomerCase@Store.pk</a></div>
        </div>
        <div className="relative flex overflow-x-hidden">
            <div className="py-2 animate-marquee whitespace-nowrap">
                <span className="text-l ">Dear Valued Customer your Order will Be Dispatched within 05 Working Days. Thank You!</span>
            </div>
        </div>

    </div>
  )
}

export default Marquee
