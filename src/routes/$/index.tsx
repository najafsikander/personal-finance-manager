import NotFound from '@/components/layout/NotFound'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$/')({
  component: NotFound,
})
