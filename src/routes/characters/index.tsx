import { createFileRoute } from '@tanstack/react-router'
import CharactersList from '../../characters/components/characters-list'
import * as z from 'zod'

const searchParamsSchema = z.object({
  page : z.number().default(1)
})
export const Route = createFileRoute('/characters/')({
  component: RouteComponent,
  validateSearch:searchParamsSchema
})

function RouteComponent() {
  return <CharactersList />
}
