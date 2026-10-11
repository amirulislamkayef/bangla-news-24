import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data = await res.json()
    const headLines = data.data
    return (
        <div className=' flex bg-red-600 text-white'>
            <h2 className='bg-red-800 py-1'>সর্বশেষ</h2>
            <MarqueeText className='py-1' direction='right' duration={10}>
                {
                    headLines.map((h) => <span key={h.id}>
                        <span>{h.title}</span>
                        <span className='mx-5'>●</span>
                    </span>)
                }
            </MarqueeText >
        </div>
    );
};

export default Marquee;