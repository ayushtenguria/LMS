import { Sidebar } from "./_components/sidebar"

export default function Dashboard({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full flex-col w-56 fixed inset-y-0 z-50">
                <Sidebar />
            </div>
            {children}
        </div>
     
    )
  }
  