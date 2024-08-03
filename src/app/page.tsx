import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
      <section className="py-8 mt-24">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row lg:items-stretch gap-10">
          <div className="lg:w-1/2 lg:pb-10 xl:pb-12 text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto ">
            <div className="relative rounded-full md:px-5 px-3 py-2 md:w-min md:whitespace-nowrap mb-6 text-sm leading-6 dark:text-slate-300 text-gray-600 ring-1 dark:ring-slate-700 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <h1 className="font-semibold leading-tight text-teal-950 dark:text-white text-4xl md:text-5xl lg:text-6xl">
              Showcase Your Work with <div className="relative after:absolute after:inset-x-0 after:h-3 after:bg-sky-100 dark:after:bg-sky-950 after:bottom-2 inline-block px-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-tr from-indigo-800 to-purple-400">Confidence</span></div>!
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Create custom preview links for your freelance projects with ease.
              Ensure your clients see the best version of your work while keeping
              your code secure. Elevate your presentations and win more clients today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="#" className="flex items-center justify-center gap-x-2 px-5 py-2.5 border border-transparent bg-indigo-700 text-white">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={16} height={16} strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="#" className="flex items-center justify-center gap-x-2 px-5 py-2.5 border border-gray-200 text-sky-700 dark:border-gray-800 dark:text-white">
                Learn more
              </Link>
            </div>
            <div className="flex items-center gap-1 mt-10 justify-center lg:justify-start gap-x-3">
              <div className="flex items-center -space-x-2">
                <Image src="/placeholder.svg" width={2250} height={1400} alt="listener avatar" className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950" />
                <Image src="/placeholder.svg" width={2250} height={1400} alt="listener avatar" className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950" />
                <Image src="/placeholder.svg" width={2250} height={1400} alt="listener avatar" className="w-10 h-10 object-cover rounded-full ring-4 ring-white dark:ring-gray-950" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">+12k</span>
                <span className="text-gray-600 text-sm dark:text-gray-300">WordWide Freelancers</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative lg:h-auto max-w-2xl md:max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 -top-8 px-10 py-1.5 bg-white text-center border border-gray-100 shadow-lg shadow-gray-200/40 rounded-t-xl">
              <span className="font-bold text-3xl text-sky-950 flex items-center gap-2">4.7+ <Star className='w-auto h-7' /></span>
              <p className="text-gray-600">Ratings</p>
            </div>
            <Image src="/placeholder.svg" width={2250} height={1400} alt="sidebiew image" className="lg:w-full lg:h-full object-cover" />
          </div>
        </div>
      </section>
    </>
  )
}
