import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebarRoutes"

export const Sidebar = () => {
    return(
        <div className="h-full border-r flex flex-col overflow-y-hidden bg-white shadow-sm">
            <div className="p-6">
            <Logo/>
            </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes />
            </div>
        </div>
    )
}