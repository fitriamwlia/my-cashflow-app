import Navigation from "@/components/fragments/Navigation"
import Sidebar from "@/components/fragments/Sidebar"

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return(
        <>
            <Navigation/>
            <div className="flex">
                <Sidebar/>
                <main className="p-5 w-full bg-slate-100 text-slate-800">{children}</main>
            </div>
        </>
    )
}