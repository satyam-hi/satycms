'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AddNavPage() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !url) {
      setMessage('Both name and URL are required.');
      return;
    }

    try {
    //   const res = await fetch('/api/nav-links', {
        const res = await fetch('/api/admin/link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, url }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Navigation link added successfully!');
        setName('');
        setUrl('');
      } else {
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setMessage('Error connecting to the server.');
    }
  };

  return (
    <div className=" p-6">
        <div className="mb-4">
                <Link href={`/admin/navlink/linkList`} ><button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm hover:cursor-pointer">
                    All Links
                </button> </Link>
            </div>
      <h1 className="text-2xl font-bold mb-4">Add Navigation Link</h1>

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
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Link
        </button>
      </form>
    </div>
  );
}
