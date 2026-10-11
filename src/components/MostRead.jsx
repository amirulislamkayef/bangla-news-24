import React from 'react';

const MostRead = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data = await res.json()
    const news = data.data

    return (
        <div className='card p-2 border-r-base-100 my-7 border border-gray-300'>
            <h1 className='font-bold text-red-700 '>সর্বাধিক পঠিত</h1>
            <div className='grid gap-4'>
                {
                    news.slice(0,9).map((mr,i) => <div key={mr.id} className="flex gap-2">
                       <p className='font-semibold text-red-600'>{i+1}</p> <h2 className='font-bold'>{mr.title}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MostRead;