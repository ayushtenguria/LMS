import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 z-50 w-full ">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full flex-col w-56 fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 md:pt-[80px] h-full">{children}</main>
    </div>
  );
}
