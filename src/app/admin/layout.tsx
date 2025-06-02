import Sidebar from "@/app/components/admin/Sidebar"


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
    return (
        <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 xl:ml12 bg-gray-100 p-6 min-h-screen">
          {children}
        </main>
      </div>
    )
  }