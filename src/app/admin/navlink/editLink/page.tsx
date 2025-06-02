'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function EditNavPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const router = useRouter();

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchLink = async () => {
      try {
        const res = await fetch(`/api/admin/link/?id=${id}`);
        const data = await res.json();
        console.log(data.data)

        if (res.ok) {
          setName(data.data.link_lable);
          setUrl(data.data.link_page_tiitle);
        } else {
          setMessage(data.error || 'Failed to load link details.');
        }
      } catch (err) {
        setMessage('Error connecting to the server.');
      } finally {
        setLoading(false);
      }
    };

    fetchLink();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !url) {
      setMessage('Both name and URL are required.');
      return;
    }

    try {
    //   const res = await fetch(`/api/admin/link/${id}`, {
        const res = await fetch(`/api/admin/link`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id,name, url }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('Navigation link updated successfully!');
        setTimeout(() => router.push('/admin/nav-links'), 1500);
      } else {
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setMessage('Error connecting to the server.');
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
         <div className="mb-4">
                <Link href={`/admin/navlink/linkList`} ><button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm hover:cursor-pointer">
                    All Links
                </button> </Link>
            </div>
      <h1 className="text-2xl font-bold mb-4">Edit Navigation Link</h1>

      {message && <p className="mb-4 text-sm text-blue-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Link Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Link URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Update Link
        </button>
      </form>
    </div>
  );
}
