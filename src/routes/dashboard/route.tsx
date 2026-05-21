import Header from "@/components/layout/Header";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header />
      <div className="w-full h-[93vh] md:min-h-screen lg:min-h-screen bg-slate-900 p-4 md:p-4 lg:p-4 overflow-auto">
        <Outlet />
      </div>
    </>
  );
}
