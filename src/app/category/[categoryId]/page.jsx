import React from 'react';
import NewsCard from '../../../components/NewsCard';
import { notFound } from 'next/navigation';

const CategoryNews = async ({ params }) => {
    const { categoryId } = await params
    
    // https://news-api-v2.vercel.app/api/category/${categoryId}
    const res = await fetch(` https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data = await res.json()

    const categoryNews = data.data

     if (!categoryNews) {
            notFound()
        }
    
    return (
        <div>
            <h1 className='text-2xl font-bold border-b-2 border-red-700 mb-5'>{data.title}</h1>

            <div className='grid grid-cols-3 gap-4'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;