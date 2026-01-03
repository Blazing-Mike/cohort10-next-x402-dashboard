'use client'

import Sidebar from "@/components/dashboard/Sidebar";
import { SidebarProvider } from "@/context/SidebarContext";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen bg-neutral-50">
                <Sidebar />
                <div className="flex flex-1 flex-col ">
                    <main className="flex-1 overflow-y-auto bg-neutral-50">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
}
