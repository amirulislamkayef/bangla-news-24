import React from 'react';
import Image from 'next/image';

const MainNews = ({ news }) => {
    const firstNews = news[0]
    const otherNews = news.slice(1)
    return (
        <div className='grid grid-cols-2 gap-2'>
            <div className="card bg-base-100 w-96 shadow-sm my-7">
                <figure>
                    <Image
                        src={firstNews.imageUrl}
                        alt="Shoes"
                        width={500}
                        height={500} />
                </figure>
                <div className="card-body">
                    <p className='font-semibold text-red-500'>{firstNews.category}</p>
                    <h2 className="card-title">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>
                </div>
            </div>
            <div>
                {
                    otherNews.slice(0, 4).map(on => <div key={on.id}>
                        <div className="card card-border bg-base-100 w-96">
                            <div className="card-body">
                                <p className='font-semibold text-red-500'>{firstNews.category}</p>
                                <h2 className="card-title">{on.title}</h2>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MainNews;