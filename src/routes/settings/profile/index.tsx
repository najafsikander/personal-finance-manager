import Profile from "@/components/ui/avatar/profile";
import { createFileRoute } from "@tanstack/react-router";
import { Image } from "@unpic/react";

export const Route = createFileRoute("/settings/profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  const imageUrl: string =
    "https://thefincheranalyst.com/wp-content/uploads/2018/07/1995-seven-john-doe.jpg";

  return (
    <section>
      <Profile width="25" height="25" imageUrl={imageUrl} />
    </section>
  );
}
