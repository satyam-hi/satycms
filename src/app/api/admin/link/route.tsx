import { NextRequest } from "next/server";
import createConnect from "@/lib/conection";

// ✅ Helper for JSON response
function jsonResponse(data: unknown, status: number = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// ✅ Define the structure of a nav link
interface NavLink {
  id?: number;
  name: string;
  url: string;
}

// ✅ GET all nav_links
// export async function GET(): Promise<Response> {
//   try {
//     const sql = "SELECT * FROM `nav_links`";

//     const  [rows]= await createConnect.query(sql);
//     const result = rows as NavLink[];


//     return jsonResponse({ data: result, message: "Success" }, 200);
//   } catch (error) {
//     const message = error instanceof Error ? error.message : "Unknown error";
//     return jsonResponse({ error: message }, 500);
//   }
// }




export async function GET(req: NextRequest): Promise<Response> {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    let sql: string;
    // let params: any[] = [];

    if (id) {
      sql = "SELECT * FROM `nav_links` WHERE id = ?";
      // params.push(id);
    } else {
      sql = "SELECT * FROM `nav_links`";
    }

    const [rows] = await createConnect.query(sql, id);
    const result = rows as NavLink[];

    if (id && result.length === 0) {
      return jsonResponse({ error: "Link not found." }, 404);
    }

    return jsonResponse(
      { data: id ? result[0] : result, message: "Success" },
      200
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return jsonResponse({ error: message }, 500);
  }
}





// ✅ Create a new nav_link
export async function POST(req: NextRequest): Promise<Response> {
  try {
    const body: NavLink = await req.json();
    const { name, url } = body;

    if (!name || !url) {
      return jsonResponse({ error: "Name and URL are required." }, 400);
    }

    const sql = "INSERT INTO `nav_links` (link_lable, link_page_tiitle) VALUES (?, ?)";
    // const result: { insertId: number } = await createConnect.query(sql, [name, url]);
    const [rows] = await createConnect.query(sql, [name, url]);
    // const result : { id: number } = rows as NavLink[];
    const result = rows as NavLink[];

    return jsonResponse({
      message: "Navigation link created successfully.",
    //   insertId: result.id,
    result:result
    }, 201);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return jsonResponse({ error: message }, 500);
  }
}




// ✅ Update a nav_link
export async function PUT(req: NextRequest): Promise<Response> {
  try {
    const body: NavLink = await req.json();
    const { id, name, url } = body;

    if (!id || !name || !url) {
      return jsonResponse({ error: "ID, name, and URL are required." }, 400);
    }

    const sql = "UPDATE `nav_links` SET link_lable = ?, link_page_tiitle = ? WHERE id = ?";
    // const result: { affectedRows: number } = await createConnect.query(sql, [name, url, id]);
    const result = await createConnect.query(sql, [name, url, id]);

    // if (result.affectedRows === 0) {
    //   return jsonResponse({ error: "No record found with provided ID." }, 404);
    // }

    return jsonResponse({ message: "Navigation link updated successfully." });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return jsonResponse({ error: message }, 500);
  }
}

// ✅ Delete a nav_link
export async function DELETE(req: NextRequest): Promise<Response> {
  try {
    const { searchParams } = new URL(req.url);
    const idParam = searchParams.get("id");

    if (!idParam) {
      return jsonResponse({ error: "ID is required." }, 400);
    }

    const id = parseInt(idParam);
    if (isNaN(id)) {
      return jsonResponse({ error: "ID must be a number." }, 400);
    }

    const sql = "DELETE FROM `nav_links` WHERE id = ?";
    const result = await createConnect.query(sql, [id]);

    // if (result.affectedRows === 0) {
    //   return jsonResponse({ error: "No record found with provided ID." }, 404);
    // }

    return jsonResponse({ message: "Navigation link deleted successfully." },200);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return jsonResponse({ error: message }, 500);
  }
}




// // //////////////////////////////////////////

// // import  creatconnect  from "@/lib/conection"



// // export async function GET(req: Request) {

// //         try {
  
// //             const sql = "SELECT * FROM `nav_links`";
// //             const GetData = await creatconnect.query(sql);
// //             if(GetData.length>0){
// //                 return new Response(JSON.stringify({ Data: GetData[0], status: 200 }), {
// //                     status: 200,
// //                     headers: { 'Content-Type': 'application/json' },
// //                 });
// //             }
           
// //         } catch (e) {
// //             return new Response(JSON.stringify({ Error: e }), { status: 200, headers: { 'Content-Type': 'application/json' } })
// //         }

    
// // }
