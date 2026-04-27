import Profile from "@/components/ui/avatar/profile";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  const imageUrl: string =
    "https://thefincheranalyst.com/wp-content/uploads/2018/07/1995-seven-john-doe.jpg";

  return (
    <section className="w-full flex flex-row gap-4 justify-start pl-2">
      <Profile width="20" height="20" imageUrl={imageUrl} />
      <div className="flex flex-col justify-center">
        <h1 className="text-xl font-medium text-black">Account Username</h1>
        <h3 className="font-medium text-slate-600">Account Owner</h3>
      </div>
    </section>
  );
}
