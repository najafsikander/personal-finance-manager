import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/settings/manage-cards/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/settings/manage-cards/"!</div>
}
