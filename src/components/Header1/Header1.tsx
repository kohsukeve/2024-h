// 'use client'

// import React, { useState } from 'react'

// export const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//     return (

// <header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
// <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
//   <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-indigo-500" fill="currentColor" >
//     <path d="M96 0V47L48 94H0V47L48 0H96Z" />
//   </svg>
//   Valeur
// </a>
// {/* ナビゲーション  Agency Price   */}
// <nav className="hidden gap-12 lg:flex">
//   <a href="#" className="text-lg font-semibold text-indigo-500">Home</a>
//   <a href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Agency</a>
//   <a href="page2" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Pricing</a>
// </nav>
// {/* 問い合わせフォーム Toiawase*/  }
// <a href="page1" className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">問い合わせフォーム</a>

// <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
// onClick={() => setIsMenuOpen(true)}
// >
//   <svg  className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
//     <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
//   </svg>

//   Menu

// </button>
// {isMenuOpen && (
//           <div className="absolute top-0 left-0 w-full">
//             <div className="p-5 bg-gray-900 border rounded shadow-sm">
//               <div className="flex items-center justify-between mb-4">
//                 <div>
//                   <a
//                     href="/"
//                     aria-label="Company"
//                     title="Company"
//                     className="inline-flex items-center"
//                   >
//                     <svg
//                       className="w-8 text-white"
//                       viewBox="0 0 24 24"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeMiterlimit="10"
//                       stroke="currentColor"
//                       fill="none"
//                     >
//                       <rect x="3" y="1" width="7" height="10" />
//                       <rect x="3" y="17" width="7" height="6" />
//                       <rect x="14" y="1" width="7" height="6" />
//                       <rect x="14" y="11" width="7" height="12" />
//                     </svg>
//                     <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
//                       valeur
//                     </span>
//                   </a>
//                 </div>
//                 <div>
//                   <button
//                     aria-label="Close Menu"
//                     title="Close Menu"
//                     className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     <svg className="w-5 text-white" viewBox="0 0 24 24">
//                       <path
//                         fill="currentColor"
//                         d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//               <nav>
//                 <ul className="space-y-4">
//                   <li>
//                     <a
//                       href="/"
//                       aria-label="Home"
//                       title="Home"
//                       className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
//                     >
//                       HOME
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       aria-label="News"
//                       title="News"
//                       className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
//                     >
//                       Agency
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/page2"
//                       aria-label="Sales Agent"
//                       title="Sales Agent"
//                       className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
//                     >
//                       SHOP
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/"
//                       aria-label="Recruit"
//                       title="Recruit"
//                       className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
//                     >
//                       CONTACT
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         )}

// {/* <!-- buttons - end --> */}
// </header>
//     )
// }