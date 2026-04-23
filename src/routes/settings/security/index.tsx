import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/security/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/settings/security/"!</div>
}
