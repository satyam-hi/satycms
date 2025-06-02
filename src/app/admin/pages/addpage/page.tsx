
'use client';

import Link from 'next/link';
import { useState } from 'react';

// Step 1: Define section types with default data structure
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
    defaultData: { image: '', heading: '', content: '',text: '' },
  },
  {
    label: 'RightImageSection',
    defaultData: { },
  },
 
];

export default function AddPage() {
  const [pageTitle, setPageTitle] = useState('');
  const [sections, setSections] = useState<any[]>([]);

  // Step 2: Add section using default structure from sectionTypes
  const addSection = (type: string) => {
    const found = sectionTypes.find((s) => s.label === type);
    if (!found) return;
    setSections([...sections, { componentName: type, componentData: { ...found.defaultData } }]);
  };

  // Step 3: Update a field inside a specific section
  const updateSectionData = (index: number, field: string, value: string) => {
    const updatedSections = [...sections];
    updatedSections[index].componentData[field] = value;
    setSections(updatedSections);
  };

  // Step 4: Remove a section
  const removeSection = (index: number) => {
    const updated = sections.filter((_, i) => i !== index);
    setSections(updated);
  };

  // Step 5: Submit page with title and structured data
  const submitPage = async () => {
    const res = await fetch('/api/admin/pages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page_titile: pageTitle,
        page_data: sections,
      }),
    });

    const data = await res.json();
    alert(data.message || 'Saved!');
    setPageTitle('');
    setSections([]);
  };

  return (
    <div className="p-6 ">
                  <div className="mb-4">
                <Link href={`/admin/pages/pageList`} ><button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm hover:cursor-pointer">
                    All pages
                </button>  <i className="fas fa-user"></i> <i className="fa-solid fa-house"></i>
                </Link>
            </div>
      <div className='sticky top-0 bg-white  border-b-2 mb-2'>
            <h1 className="text-2xl font-bold mb-4">Add New Page</h1>

            {/* Step 6: Input for page title */}
            <input
                type="text"
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
                placeholder="Page Title"
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />

            {/* Step 7: Buttons to add different section types */}
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
      {/* Step 8: Render each section with dynamic fields */}
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

          {/* Step 9: Render dynamic input fields based on componentData */}
          {Object.entries(section.componentData).map(([field, value]) => (
            <input
              key={field}
              type="text"
            //   type={field==='image'?'file':'text'}
            //   value={value}
            value={String(value ?? '')}
              onChange={(e) => updateSectionData(index, field, e.target.value)}
              placeholder={field}
              className="w-full mb-2 p-2 border border-gray-300 rounded"
            />
          ))}
        </div>
      ))}

      {/* Step 10: Save page button */}
      <button
        onClick={submitPage}
        className="px-6 py-2 bg-green-600 text-white font-semibold rounded"
      >
        Save Page
      </button>
    </div>
  );
}





////////////////////////////////////////////////////////////////////////////////////////////////

// 'use client';

// import { useState } from 'react';

// const sectionTypes = ['ParagraphSection', 'HeroSection' , 'LeftImageSection'];

// export default function AddPage() {
//   const [pageTitle, setPageTitle] = useState('');
//   const [sections, setSections] = useState<any[]>([]);

//   const addSection = (type: string) => {
//     const defaultData =
//       type === 'ParagraphSection'
//         ? { ImgUrl: '', text: '' }
//         : { backGroundImgUrl: '', text: '', text2: '' };

//     setSections([...sections, { componentName: type, componentData: defaultData }]);
//   };

//   const updateSectionData = (index: number, field: string, value: string) => {
//     const updatedSections = [...sections];
//     updatedSections[index].componentData[field] = value;
//     setSections(updatedSections);
//   };
  
//   const submitPage = async () => {
//     // const res = await fetch('/api/pages', {
//         const res = await fetch('/api/admin/pages', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         page_titile: pageTitle,
//         page_data: sections,
//       }),
//     });

//     const data = await res.json();
//     alert(data.message || 'Saved!');
//     setPageTitle('');
//     setSections([]);
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Add New Page</h1>

//       <input
//         type="text"
//         value={pageTitle}
//         onChange={(e) => setPageTitle(e.target.value)}
//         placeholder="Page Title"
//         className="w-full p-2 border border-gray-300 rounded mb-4"
//       />

//       <div className="space-x-2 mb-4">
//         {sectionTypes.map((type) => (
//           <button
//             key={type}
//             onClick={() => addSection(type)}
//             className="px-4 py-1 bg-blue-500 text-white rounded"
//           >
//             Add {type}
//           </button>
//         ))}
//       </div>

//       {sections.map((section, index) => (
//         <div key={index} className="border rounded p-4 mb-4 bg-gray-50">
//           <h2 className="font-semibold mb-2">{section.componentName}</h2>

//           {Object.entries(section.componentData).map(([field, value]) => (
//             <input
//               key={field}
//               type="text"
//             //   value={value}
//               onChange={(e) => updateSectionData(index, field, e.target.value)}
//               placeholder={field}
//               className="w-full mb-2 p-2 border border-gray-300 rounded"
//             />
//           ))}
//         </div>
//       ))}

//       <button
//         onClick={submitPage}
//         className="px-6 py-2 bg-green-600 text-white font-semibold rounded"
//       >
//         Save Page
//       </button>
//     </div>
//   );
// }
