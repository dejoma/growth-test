import { Home, Brain, LineChart, Heart } from "lucide-react"
import { useLocation } from "react-router-dom"
import { 
  Sidebar, 
  SidebarContent, 
  SidebarProvider,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton 
} from "@/components/ui/sidebar"

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const menuItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/model", icon: Brain, label: "Model" },
    { path: "/analyse", icon: LineChart, label: "Analyse" },
    { path: "/adopt", icon: Heart, label: "Adopt" },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <h2 className="px-4 text-lg font-semibold">My App</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.path}
                  >
                    <a href={item.path}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}
