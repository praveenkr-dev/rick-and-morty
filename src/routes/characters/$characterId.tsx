import { createFileRoute } from '@tanstack/react-router'
import CharacterDetails from '../../characters/components/character-details';

export const Route = createFileRoute('/characters/$characterId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { characterId } = Route.useParams();
  return <CharacterDetails characterId={characterId} />
}

