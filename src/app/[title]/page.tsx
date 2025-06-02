import Header from "@/app/components/header/header";
import HeroSection from "@/app/components/sections/heroSection";
import LeftImageSection from "@/app/components/sections/leftImageSection";
import RightImageSection from "@/app/components/sections/rightImageSection";
import ParagraphSection from "@/app/components/sections/paragrafSection";

// import  props --------------
import { HeroSectionProps } from "@/app/components/sections/heroSection";
import { LeftImageSectionProps } from "@/app/components/sections/leftImageSection";
import { RightImageSectionProps } from "@/app/components/sections/rightImageSection";
import { paragraphSectionProps } from "@/app/components/sections/paragrafSection";


type SectionPropsMap = {
    HeroSection: HeroSectionProps;
    LeftImageSection: LeftImageSectionProps;
    RightImageSection: RightImageSectionProps;
    ParagraphSection: paragraphSectionProps;
};

type SectionItem<K extends keyof SectionPropsMap = keyof SectionPropsMap> = {
    componentName: K;
    // componentData: SectionPropsMap[K];
    componentData: SectionPropsMap[K];
};



export default async function DynamicPage({
    params,
}: {
    params: Promise<{ title: string }>;
}) {
    const { title } = await params;
    // try{
    //     const response = await fetch(`http://localhost:3000/api/admin/pages?title=${title}`, {
    //         cache: 'no-store',
    //     });
    //     const getDataFech = await response.json();
    //     const tt= getDataFech.data[0].page_data;
    //     const sectionShow: SectionItem[] =  getDataFech.data[0].page_data ;
    // }catch(e){
    //     const sectionShow: SectionItem[] = []
    // }

    let sectionShow: SectionItem[] = [];

    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/pages?title=${title}`,
        {
          cache: "no-store",
        }
      );
  
      if (!response.ok) {
        // throw new Error("Failed to fetch page data");
        return(
        <h1>page not found</h1>)
      }
  
      const data = await response.json();
      sectionShow = data?.data?.[0]?.page_data || [];
    } catch (error) {
      console.error("Error loading dynamic page data:", error);
      sectionShow = []; // Ensure it's still an empty array on failure
    }
  
    return (
        <>

            <Header />
            <main className="pt-14">
                <h1>this is dynamic page {title}</h1>

                {sectionShow.map((section, index) => {
                    switch (section.componentName) {
                        case "HeroSection":
                            return (
                                <HeroSection key={index} {...section.componentData as HeroSectionProps} />
                            );
                        case "LeftImageSection":
                            return (
                                <LeftImageSection key={index} {...section.componentData as LeftImageSectionProps} />
                            );
                        case "RightImageSection":
                            return (
                                <RightImageSection key={index} {...section.componentData as RightImageSectionProps} />
                            );
                        case "ParagraphSection":
                            return (
                                <ParagraphSection key={index} {...section.componentData as paragraphSectionProps} />
                            );

                        default:
                            return null;
                    }
                })}

            </main>
        </>
    );
}






////////////////////////////////////////////////////////////////////////////


// import Header from "@/app/components/header/header";
// import HeroSection from "@/app/components/sections/heroSection";
// import LeftImageSection from "@/app/components/sections/leftImageSection";
// import RightImageSection from "@/app/components/sections/rightImageSection";

// // Define the type for the component data if needed
// // interface ComponentProps {
// //     backGroundImgUrl: string;
// //     text: string;
// //     ImgUrl:string;
// // }

// interface SectionItem {
//     componentName: string;
//     componetData: Record<string, unknown>;

// };



// export default async function DynamicPage({
//     params,
// }: {
//     params: Promise<{ title: string }>;
// }) {
//     const { title } = await params;

//     // Instead of storing JSX here, store the actual component functions
//     const viewSection: { [key: string]: React.FC<unknown> } = {
//         HeroSection,
//         LeftImageSection,
//         RightImageSection,
//     };

//     const sectionShow: SectionItem[] = [
//         {
//             componentName: "HeroSection",
//             componetData: {
//                 backGroundImgUrl: "https://png.pngtree.com/thumb_back/fh260/background/20230930/pngtree-a-blue-sky-above-clouds-with-clouds-image_13313410.jpg",
//                 text: "this form my dnamic obj first top",
//             },
//         },
//         {
//             componentName: "RightImageSection",
//             componetData: {
//                 ImgUrl: "ll",
//                 text: "this form my dnamic obj",
//             },
//         },
//         {
//             componentName: "LeftImageSection",
//             componetData: {
//                 ImgUrl: "pp",
//                 text: "this form my dnamic obj",
//             },
//         }
//     ];

//     return (
//         <>
//             <Header />
//             <main className="pt-14">
//                 <h1>this is dynamic page {title}</h1>

//                 {sectionShow.map((section, index) => {
//                     const Component = viewSection[section.componentName];
//                     if (!Component) return null;

//                     return (
//                         <div key={index}>
//                             <Component data={...section.componetData} />
//                         </div>
//                     );
//                 })}
//             </main>
//         </>
//     );
// }



// --------------------------------------------------------------------------------

// // import React from "react";
// import Header from "@/app/components/header/header";
// import HeroSection from "@/app/components/sections/heroSection"
// import LeftImageSection from "@/app/components/sections/leftImageSection"
// import RightImageSection from "@/app/components/sections/rightImageSection"


// export default async function DynamicPage({
//     params,
// }: {
//     params: Promise<{ title: string }>
// }) {

//     const { title } = await params;

//     interface SectionItem {
//         componentName: string;
//         componetData: Record<string, any>;
//       }


//     const viewSection: { [componentName: string]: React.ReactNode } = {
//         HeroSection: <HeroSection />,
//         LeftImageSection: <LeftImageSection />,
//         RightImageSection: <RightImageSection />
//     };

//     // const sectionfix = ['RightImageSection', 'HeroSection','RightImageSection', 'RightImageSection', 'RightImageSection', 'RightImageSection', ];

//     const sectionShow : SectionItem[] = [
//         {
//             componentName:'HeroSection',
//             componetData:{
//                 backGroundImgUrl:'',
//                 text:'this form my dnamic obj first top'
//             }
//         },
//         {
//             componentName:'RightImageSection',
//             componetData:{
//                 ImgUrl:'',
//                 text:'this form my dnamic obj'
//             }
//         },
//         {
//             componentName:'HeroSection',
//             componetData:{
//                 backGroundImgUrl:'img2.png',
//                 text:'this form my dnamic  form last'
//             }
//         }
//         ,
//         {
//             componentName:'HeroSection',
//             componetData:{
//                 backGroundImgUrl:'img2.png',
//                 text:'this form my dnamic  form last'
//             }
//         }
//     ];
//     return (<>
//         <Header />
//         <main className="pt-14" >
//             <h1> this is dynamic page {title}</h1>

//             {/* {viewSection['RightImageSection']} */}
//             {/* {
//                 sectionfix.map((componentName, index) => (
//                     <div key={index}>
//                         {viewSection[componentName]}

//                     </div>
//                 ))
//             } */}

//             {/* {viewSection[title]} */}


//     {sectionShow.map((section, index) => {
//           const Component = viewSection[section.componentName];
//           if (!Component) return null;

//         //   return (
//         //     <div key={index}>
//         //       {/* <Component {...section.componetData} /> */}
//         //       <Component  />
//         //       {/* {Component} */}
//         //     </div>
//         //   );
//         return (
//             <div key={index}>
//                 <h1>{index}</h1>
//                 {Component}
//             {/* <Component /> */}

//             </div>
//         )



//         })}



//         </main>
//     </>)
// }





///////////////////////////////////////////////////////////////////////////////


// app/[title]/page.tsx

// import Header from "@/app/components/header/header";
// import HeroSection from "@/app/components/sections/heroSection";
// import LeftImageSection from "@/app/components/sections/leftImageSection";
// import RightImageSection from "@/app/components/sections/rightImageSection";
// import { Metadata } from "next";

// // Define the props expected by section components
// interface ComponentProps {
//   backGroundImgUrl?: string;
//   ImgUrl?: string;
//   text: string;
// }

// // Section item structure
// interface SectionItem {
//   componentName: keyof typeof viewSection;
//   componetData: ComponentProps;
// }

// // Mapping of component names to actual components
// const viewSection = {
//   HeroSection,
//   LeftImageSection,
//   RightImageSection,
// };

// // Define the dynamic page component
// export default function DynamicPage({
//   params,
// }: {
//   params: { title: string };
// }) {
//   const { title } = params;

//   const sectionShow: SectionItem[] = [
//     {
//       componentName: "HeroSection",
//       componetData: {
//         backGroundImgUrl:
//           "https://png.pngtree.com/thumb_back/fh260/background/20230930/pngtree-a-blue-sky-above-clouds-with-clouds-image_13313410.jpg",
//         text: "this from my dynamic object, first top",
//       },
//     },
//     {
//       componentName: "RightImageSection",
//       componetData: {
//         ImgUrl: "ll",
//         text: "this from my dynamic object",
//       },
//     },
//     {
//       componentName: "LeftImageSection",
//       componetData: {
//         ImgUrl: "pp",
//         text: "this from my dynamic object",
//       },
//     },
//   ];

//   return (
//     <>
//       <Header />
//       <main className="pt-14">
//         <h1>this is dynamic page {title}</h1>

//         {sectionShow.map((section, index) => {
//           const Component = viewSection[section.componentName];
//           return (
//             <div key={index}>
//               <Component {...section.componetData} />
//             </div>
//           );
//         })}
//       </main>
//     </>
//   );
// }




///////////////////////////////////////////////////////////////////////////////////
