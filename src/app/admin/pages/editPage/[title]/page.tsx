'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// Section type definitions
const sectionTypes = [
  {
    label: 'ParagraphSection',
    defaultData: { ImgUrl: '', text: '' },
  },
  {
    label: 'HeroSection',
    defaultData: { backGroundImgUrl: '', text: '', text2: '' },
  },
  {
    label: 'LeftImageSection',
    defaultData: { image: '', heading: '', content: '', text: '' },
  },
  {
    label: 'RightImageSection',
    defaultData: {},
  },
];

export default function EditPage() {
  const { title } = useParams(); // Get ID from URL
  const [pageTitle, setPageTitle] = useState('');
  const [sections, setSections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch existing page data
  useEffect(() => {
    const fetchPage = async () => {
      try {
        // const res = await fetch(`/api/admin/pages/${id}`);
        const res = await fetch(`/api/admin/pages?title=${title}`);
        const data = await res.json();
        console.log(data);

        setPageTitle(data.data[0].page_titile || '');
        setSections(data.data[0].page_data || []);
      } catch (error) {
        console.error('Error fetching page:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [title]);

  const updateSectionData = (index: number, field: string, value: string) => {
    const updatedSections = [...sections];
    updatedSections[index].componentData[field] = value;
    setSections(updatedSections);
  };

  const removeSection = (index: number) => {
    const updated = sections.filter((_, i) => i !== index);
    setSections(updated);
  };

  const submitUpdate = async () => {
    const res = await fetch(`/api/admin/pages/`, {
      method: 'PUT', // or PATCH depending on your backend
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page_titile: pageTitle,
        page_data: sections,
        title: title,
      }),
    });

    const data = await res.json();
    alert(data.message || 'Page updated!');
  };

  if (loading) return <div className="p-6">Loading...</div>;

  // Step 2: Add section using default structure from sectionTypes
  const addSection = (type: string) => {
    const found = sectionTypes.find((s) => s.label === type);
    if (!found) return;
    setSections([...sections, { componentName: type, componentData: { ...found.defaultData } }]);
  };


  return (
    <div className="p-6 ">
         <div className="mb-4">
                <Link href={`/admin/pages/pageList`} ><button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm hover:cursor-pointer">
                    All pages
                </button> </Link>
            </div>
      <div className="sticky top-0 bg-white border-b-2 mb-2">
        <h1 className="text-2xl font-bold mb-4">Edit Page</h1>

        <input
          type="text"
          value={pageTitle}
          onChange={(e) => setPageTitle(e.target.value)}
          placeholder="Page Title"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />


        <div className="space-x-2 mb-4">
          {sectionTypes.map((section) => (
            <button
              key={section.label}
              onClick={() => addSection(section.label)}
              className="px-4 py-1 bg-blue-500 text-white rounded"
            >
              Add {section.label}
            </button>
          ))}
        </div>


      </div>





      {sections.map((section, index) => (
        <div key={index} className="border rounded p-4 mb-4 bg-gray-50">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold">{section.componentName}</h2>
            <button
              onClick={() => removeSection(index)}
              className="text-red-500 hover:underline text-sm"
            >
              Remove
            </button>
          </div>

          {Object.entries(section.componentData).map(([field, value]) => (
            <input
              key={field}
              type="text"
              // value={value}
              value={String(value ?? '')}
              onChange={(e) => updateSectionData(index, field, e.target.value)}
              placeholder={field}
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
          ))}
        </div>
      ))}

      <button
        onClick={submitUpdate}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded"
      >
        Update Page
      </button>
    </div>
  );
}
