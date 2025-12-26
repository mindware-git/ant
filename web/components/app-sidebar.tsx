"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Bot,
  Settings,
  MessageSquare,
  BarChart3,
  Brain,
  GitBranch,
} from "lucide-react";

interface AppSidebarProps {
  projectId: string;
}

export function AppSidebar({ projectId }: AppSidebarProps) {
  const menuItems = [
    {
      title: "대시보드",
      icon: LayoutDashboard,
      url: `/dashboard/projects/${projectId}`,
    },
    {
      title: "Agent 설정",
      icon: Bot,
      url: `/dashboard/projects/${projectId}/agent`,
    },
    {
      title: "Rule 관리",
      icon: GitBranch,
      url: `/dashboard/projects/${projectId}/rule`,
    },
    {
      title: "Memory 설정",
      icon: Brain,
      url: `/dashboard/projects/${projectId}/memory`,
    },
    {
      title: "테스트 환경",
      icon: MessageSquare,
      url: `/dashboard/projects/${projectId}/test`,
    },
    {
      title: "성능 분석",
      icon: BarChart3,
      url: `/dashboard/projects/${projectId}/analytics`,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-3 py-2">
          <h2 className="text-lg font-semibold">프로젝트</h2>
          <p className="text-sm text-muted-foreground truncate">
            데모 프로젝트
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>메뉴</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href={`/dashboard/projects/${projectId}/settings`}>
                <Settings />
                <span>설정</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
