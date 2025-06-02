import Link from 'next/link';
import MobileMenu from "@/app/components/header/mobileMenu"; // adjust path as needed

interface Navelink {
    link_page_tiitle: string;
    link_lable: string;
}

async function getLinks(): Promise<Navelink[]> {
    const res = await fetch(`http://localhost:3000/api/admin/link`, {
        cache: 'no-store'
    });

    const data = await res.json();
    return data.data || [];
}

export default async function Header() {
    const NaveLinksArry = await getLinks();

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link href="/">MyLogo</Link>
                </div>

                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    {NaveLinksArry.map((nav, index) => (
                        <Link key={index} href={`${nav.link_page_tiitle}`} className="hover:text-blue-600">
                            {nav.link_lable}
                        </Link>
                    ))}
                </nav>

                <MobileMenu links={NaveLinksArry} />
            </div>
        </header>
    );
}














/////////////////////////////////////////////////////////////////////////////





// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// interface Navelink {
//     link_page_tiitle:string;
//     link_lable:string;
// }

// export default function Header() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [NaveLinksArry ,setNaveLinksArry] =useState<Navelink [] >([]);

//     useEffect(() => {
//         const getApi = async ()=>{
//             const response = await  fetch('/api/admin/link');
//             const linksResponse = await response.json();
//             console.log(linksResponse.data)
//             setNaveLinksArry(linksResponse.data);

//         }
//         getApi();
//         // link_lable
//         // : 
//         // "About"
//         // link_page_tiitle
//         // : 
//         // // "About"

//     }, [])



//     // const NaveLinksArry = [
//     //     {
//     //         lable: "About",
//     //         link: "/About"
//     //     },
//     //     {
//     //         lable: "Services",
//     //         link: "/Services"
//     //     },
//     //     {
//     //         lable: "Contact",
//     //         link: "/Contact"
//     //     }
//     // ]

//     return (
//         // fixed
//         <header className="bg-white shadow-md  fixed w-full z-50">
//             <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//                 {/* Logo */}
//                 <div className="text-xl font-bold">
//                     <Link href="/">MyLogo</Link>
//                 </div>

//                 {/* Desktop Nav */}
//                 <nav className="hidden md:flex space-x-6">
//                     <Link href="/" className="hover:text-blue-600">Home</Link>
//                     {NaveLinksArry.map((nav, index) => (
//                         <Link key={index} href={`${nav.link_page_tiitle}`} className="hover:text-blue-600">{nav.link_lable}</Link>
//                     ))}
//                 </nav>

//                 {/* Mobile Hamburger Button */}
//                 <div className="md:hidden">
//                     <button
//                         onClick={() => setIsOpen(!isOpen)}
//                         className="focus:outline-none text-2xl"
//                     >
//                         {isOpen ? '✖' : '☰'}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Nav Menu */}
//             {isOpen && (
//                 <nav className="md:hidden bg-white shadow-md px-4 pb-4 space-y-3">
//                     <Link href="/" className="block hover:text-blue-600">Home</Link>
//                     {NaveLinksArry.map((nav, index) => (
//                         <Link key={index} href={`${nav.link_page_tiitle}`} className="block hover:text-blue-600">{nav.link_lable}</Link>
//                     ))}
//                 </nav>
//             )}
//         </header>
//     );
// }
