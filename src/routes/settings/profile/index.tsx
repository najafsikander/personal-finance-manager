import Profile from "@/components/ui/avatar/profile";
import { createFileRoute } from "@tanstack/react-router";
import { PencilLine } from "lucide-react";

export const Route = createFileRoute("/settings/profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  const imageUrl: string =
    "https://thefincheranalyst.com/wp-content/uploads/2018/07/1995-seven-john-doe.jpg";

  return (
    <>
      <section className="w-full flex flex-row gap-4 justify-start pl-2">
        <Profile width="20" height="20" imageUrl={imageUrl} />
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-medium text-black">Account Username</h1>
          <h3 className="font-medium text-slate-600">Account Owner</h3>
        </div>
      </section>
      <section className="w-full mt-2">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-medium text-lg">About Me</h1>
          <div className="p-2 bg-gray-200 rounded-3xl cursor-pointer">
            <PencilLine size={18} color="#334155" />
          </div>
        </div>
        <p className="text-slate-500 text-sm font-medium">
          I am software Engineer
        </p>
      </section>
      <section className="w-full mt-2">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-medium text-lg">Job</h1>
          <div className="p-2 bg-gray-200 rounded-3xl cursor-pointer">
            <PencilLine size={18} color="#334155" />
          </div>
        </div>
        <p className="text-slate-500 text-sm font-medium">Software engineer</p>
      </section>
      <section className="w-full mt-2">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-medium text-lg">Private Profile</h1>
          <div className="p-2 bg-gray-200 rounded-3xl cursor-pointer">
            <PencilLine size={18} color="#334155" />
          </div>
        </div>
      </section>
      <section className="w-full mt-2">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-medium text-lg">Country</h1>
          <div className="p-2 bg-gray-200 rounded-3xl cursor-pointer">
            <PencilLine size={18} color="#334155" />
          </div>
        </div>
      </section>
    </>
  );
}
