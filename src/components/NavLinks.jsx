import React from 'react';
import Link from 'next/link';

const NavLinks = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories')
    const data = await res.json()
    const navs = data.data
    const filteredNavs = navs.filter(n => n.scrapable)
    return (
        <div className='flex gap-5 mt-4 justify-center'>
            <Link href='/'>Home</Link>
            {
                filteredNavs.map((n,ind) => <Link key={ind} href={`/category/${n.slug}`}>{n.title}</Link>)
            }
        </div>
    );
};

export default NavLinks;