import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewsCard = ({ news }) => {
    return (
        <Link href={`/news/${news.id}`}>
            <div>
                <div className="card bg-base-100 shadow-sm my-7">
                    <figure>
                        <Image
                            src={news.imageUrl}
                            alt="news picture"
                            width={500}
                            height={500} />
                    </figure>
                    <div className="card-body">
                        <p className='font-semibold text-red-500'>{news.category}</p>
                        <h2 className="card-title">{news.title}</h2>
                        <p>{news.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;