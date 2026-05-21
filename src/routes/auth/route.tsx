import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full h-[93vh] md:min-h-screen lg:min-h-screen bg-slate-900 p-4 md:p-4 lg:p-4 overflow-auto">
      <section className="flex h-full flex-col items-center justify-center text-center">
        <Outlet />
      </section>
    </div>
  );
}
