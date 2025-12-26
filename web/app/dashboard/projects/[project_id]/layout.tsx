import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ReactNode, use } from "react";

export default function ProjectLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ project_id: string }>;
}) {
  const { project_id } = use(params);
  return (
    <SidebarProvider>
      <AppSidebar projectId={project_id} />
      <main className="flex flex-1 flex-col">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-semibold">데모 프로젝트</h1>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
