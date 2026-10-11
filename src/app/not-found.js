import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-[#f8faf9] px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">

        {/* Book Illustration */}
        <div className="relative mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-green-100">
          <div className="absolute -right-2 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-2xl">
            ✨
          </div>

          <div className="text-7xl">📚</div>

          <div className="absolute -bottom-2 -left-2 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
            🔍
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-8xl font-extrabold tracking-tight text-green-600 sm:text-9xl">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
          Oops! This Page Is Missing
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-gray-500">
          Looks like this page has disappeared from our bookshelf.
          Dont worry! There are plenty of amazing stories waiting
          for you to discover.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="rounded-xl bg-green-600 px-7 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-lg"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Footer Message */}
        <p className="mt-12 text-sm text-gray-400">
          Every great story starts with a new page. 💚
        </p>

      </div>
    </section>
  );
};

export default NotFound;