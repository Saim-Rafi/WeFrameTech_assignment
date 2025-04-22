import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 bg-muted/30">{children}</main>
      </div>
    </div>
  );
}