import Banner from '@/components/Banner';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-zinc-900 text-white font-sans">
            <main className="min-h-screen w-full flex-col text-7xl font-extrabold tracking-tighter py-4 px-4">
                <Banner></Banner>
            </main>
        </div>
    );
}
