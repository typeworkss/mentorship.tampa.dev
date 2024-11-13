import { type ReactNode } from 'react';
import { SidebarProvider } from '~/ui/primitives/sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div>{children}</div>
    </SidebarProvider>
  );
}
