import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { formDevtoolsPlugin } from "@tanstack/react-form-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Header from "@/components/layout/Header";

import appCss from "../styles.css?url";
import NotFound from "@/components/layout/NotFound";
import Error from "@/components/layout/Error";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Finance Manager App",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: NotFound,
  errorComponent: Error,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
            formDevtoolsPlugin(),
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
