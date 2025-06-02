"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
interface pages {
    id: string;
    page_titile: string;

}

export default function PageList() {
    const [allpgesArray, setAllpgesArray] = useState<pages[]>([]);

    useEffect(() => {
        const getAllPages = async () => {
            const response = await fetch('/api/admin/pages');
            const pagesData = await response.json();
            console.log(pagesData)
            setAllpgesArray(pagesData.data)
        }
        getAllPages()
    }, [])

    const deleteFun = async (id: string) => {
        console.log(id)
        const response = await fetch(`/api/admin/pages?id=${id}`, {
            method: "DELETE"
        })
        const data = await response.json();
        console.log(data)

    }


    return (
        <div className="p-6  ">
            <h1 className="text-2xl font-bold mb-6">All Pages</h1>
            <div className="mb-4">
                <Link href={`/admin/pages/addpage`} ><button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm hover:cursor-pointer">
                    Add page
                </button> </Link>
            </div>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="min-w-full table-auto border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
                                S.N
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
                                Page Title Name
                            </th>
                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allpgesArray.map((page, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-sm text-gray-800 border-b">{index + 1}</td>
                                    <td className="px-4 py-3 text-sm text-gray-800 border-b">{page.page_titile}</td>
                                    <td className="px-4 py-3 border-b">
                                        <Link href={`/admin/pages/editPage/${page.page_titile}`} ><button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm hover:cursor-pointer">
                                            Edit
                                        </button> </Link>
                                        <button onClick={() => deleteFun(page.id)} className="text-white bg-red-600 hover:bg-red-800 px-4 py-1 rounded text-sm hover:cursor-pointer">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
