import { useNavigate } from '@tanstack/react-router'
import Button from '../../components/button/button';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white flex items-center justify-center relative">
            <div className="backdrop-blur-md bg-black/5 border left-[37%] border-black/10 rounded-2xl p-8 max-w-md text-center shadow-lg text-black absolute">
                <h2 className="text-2xl font-bold mb-2 tracking-wide">
                    🔮 Enter the Rick & Morty Multiverse
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                    Step into the portal and meet characters from across dimensions!
                </p>
                <Button onClickFn={() => navigate({ to: '/characters' })}>
                    <div> Enter</div>
                </Button>
            </div>
        </div>
    )
}
