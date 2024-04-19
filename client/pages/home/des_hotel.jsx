import React, { PureComponent } from 'react';

const DesHotel = () => {
    return(
        <>  
            <div className=' mt-12 text-center text-4xl font-serif bg-gradient-to-r from-violet-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text'>Hotel trending</div>
            <div className=' max-w-[1200px] mx-auto flex justify-between items-center py-10 h-full'>
                <div className=' w-1/4 mx-6 text-center'>
                    <span className=' h-12 block text-lg font-mono font-semibold w-full'>Rosetta Beach Hotel & Apartment</span>
                    <img className=' mt-4 rounded-md hover:scale-105 duration-300' src="https://cf.bstatic.com/xdata/images/hotel/square600/497589476.webp?k=4dff7922db5c314b4bfb88112bb4bba32e58736cdf4d3a6890606f506be23178&o=" alt="" />
                </div>
                <div className=' w-1/4 mx-6 text-center'>
                    <span className=' h-12 block text-lg font-mono font-semibold w-full'>Yuni Hotel And Apartment</span>
                    <img className=' mt-4 rounded-md hover:scale-105 duration-300' src="https://cf.bstatic.com/xdata/images/hotel/square600/497702685.webp?k=c7c1d63d3fec13dc28aa27082d33bc5248087620cf5ca0d67d9e792703d15ed2&o=" alt="" />
                </div>
                <div className=' w-1/4 mx-6 text-center'>
                    <span className=' h-12 block text-lg font-mono font-semibold w-full'>Thè HEM Hotel and Apartment</span>
                    <img className=' mt-4 rounded-md hover:scale-105 duration-300' src="https://cf.bstatic.com/xdata/images/hotel/square600/527630909.webp?k=fdb0d481f1c42b002d379744bec349c612c61f006eb3ee8b6f65706a31517551&o=" alt="" />
                </div>
                <div className=' w-1/4 mx-6 text-center'>
                    <span className=' h-12 block text-lg font-mono font-semibold w-full'>Flower Boutique Hotel</span>
                    <img className=' mt-4 rounded-md hover:scale-105 duration-300' src="https://cf.bstatic.com/xdata/images/hotel/square600/515973309.webp?k=cec1c071640583bf57820f555f8296dcb671533606fdaf165da521f2b19d1d03&o=" alt="" />
                </div>
            </div>
        </>
    )
}

export default DesHotel