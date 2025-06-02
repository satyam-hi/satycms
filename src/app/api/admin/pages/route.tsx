import createConnect from "@/lib/conection";
import { NextRequest } from "next/server";

interface Page {
  id: number;
  page_titile: string;
  page_data: string;
}

export async function GET(req: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title");

    let query = "SELECT * FROM `pages`";
    let params: unknown[] = [];

    if (title) {
      query += " WHERE `page_titile` = ?";
      params.push(title);
    }

    // const result: Page[] = await createConnect.query(query, params);

    const [rows] = await createConnect.query(query, params);
  const result=  rows as Page[]

    // If result is empty
    if (!result || result.length === 0) {
      return new Response(JSON.stringify({ data: [], message: "No data found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Parse `page_data` JSON string for each result item
    const parsedResult = result.map((page) => ({
      ...page,
      page_data: safeJsonParse(page.page_data),
    }));

    return new Response(JSON.stringify({ data: parsedResult }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// ✅ Helper to safely parse JSON
function safeJsonParse(jsonStr: string): unknown {
  try {
    return JSON.parse(jsonStr);
  } catch {
    return jsonStr; // return raw string if parsing fails
  }
}





interface PageBody {
    page_titile: string;
    page_data: unknown[];
  }
  
  export async function POST(req: NextRequest): Promise<Response> {
    try {
      const body: PageBody = await req.json();
      const { page_titile, page_data } = body;
  
      if (!page_titile || !Array.isArray(page_data)) {
        return new Response(JSON.stringify({ error: "Invalid data format" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      const sql = "INSERT INTO `pages` (page_titile, page_data) VALUES (?, ?)";
    //   const result: { insertId: number } = await createConnect.query(sql, [
    //     page_titile,
    //     JSON.stringify(page_data),
    //   ]);
      const result = await createConnect.query(sql, [
        page_titile,
        JSON.stringify(page_data),
      ]);
  
      return new Response(
        JSON.stringify({
          message: "Page saved successfully",
        //   insertId: result.insertId,
          result:result,
        }),
        {
          status: 201,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return new Response(JSON.stringify({ error: message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }






  interface PageBodyedit {
    page_titile: string;
    page_data: unknown[];
    title: string;
  }
  
  export async function PUT(req: NextRequest ): Promise<Response> {
    try {
    //   const pageId = params.id;
      const body: PageBodyedit = await req.json();
      const { page_titile, page_data ,title} = body;
  
      if (!page_titile || !Array.isArray(page_data)) {
        return new Response(JSON.stringify({ error: 'Invalid data format' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      const sql = 'UPDATE `pages` SET page_titile = ?, page_data = ? WHERE page_titile = ?';
      const result = await createConnect.query(sql, [
        page_titile,
        JSON.stringify(page_data),
        title,
      ]);
  
      return new Response(
        JSON.stringify({
          message: 'Page updated successfully',
          result,
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      return new Response(JSON.stringify({ error: message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }








  export async function DELETE(req: Request): Promise<Response> {
    try {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");
  
      if (!id) {
        return new Response(JSON.stringify({ error: "Title is required" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      const query = "DELETE FROM `pages` WHERE `id` = ?";
      const [result] = await createConnect.query(query, [id]);
  
      // const { affectedRows } = result as any;Page[]
      // const { affectedRows } = result as Page[];
  
      // if (affectedRows === 0) {
      //   return new Response(JSON.stringify({ message: "Page not found or already deleted" }), {
      //     status: 404,
      //     headers: { "Content-Type": "application/json" },
      //   });
      // }
  
      return new Response(JSON.stringify({ message: "Page deleted successfully" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
  
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return new Response(JSON.stringify({ error: message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  






// ///////////////////////////////////////////////////////
// import  creatconnect  from "@/lib/conection"



// export async function GET(req: Request) {
//     const { searchParams } = new URL(req.url);
//     const title = searchParams.get('title');
//     if (!title) {
//         try {
  
//             const sql = "SELECT * FROM `pages`";
//             const GetData = await creatconnect.query(sql);
//             if(GetData.length>0){
//                 return new Response(JSON.stringify({ Data: GetData[0], status: 200 }), {
//                     status: 200,
//                     headers: { 'Content-Type': 'application/json' },
//                 });
//             }
           
//         } catch (e) {
//             return new Response(JSON.stringify({ Error: e }), { status: 200, headers: { 'Content-Type': 'application/json' } })
//         }

//     } else {
    
//         const sql = "SELECT * FROM `pages` WHERE `page_titile` = ?";
//         const [GetData] = await creatconnect.query(sql, [title]);
//         return new Response(JSON.stringify({ data: GetData }), {
//             status: 200,
//             headers: { 'Content-Type': 'application/json' },
//         });
//     }
// }



// ////////////////////////////////////////

// export async function GET() {
//     try{

//         const sql = "SELECT * FROM `pages`";
//         const [GetData] = await creatconnect.query(sql);
//     return new Response(JSON.stringify({ message: 'feched all category successful',GetData :GetData }), {
//         status: 200,
//         headers: { 'Content-Type': 'application/json' },
//     });
//     }catch(e){
//         return new Response(JSON.stringify({ message: 'feched all category failed',error: e }), {
//             status: 500,
//             headers: { 'Content-Type': 'application/json' },
//         });

//     }
 
// }