import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-900 text-white font-sans">
            <main className="min-h-screen w-full flex-col text-7xl font-extrabold tracking-tighter py-32 px-16">
                <h1>Hello Welcome</h1>
                <h1>Store House</h1>
                <div id="development">I AM DEVELOPMENT</div>
                <div id='sifad' className='mt-10 text-4xl font-bold'>MD. SIFAD ISLAM</div>
                <div id='hasib' className='mt-10 text-4xl font-bold'>MD. HASIB ISLAM</div>
            </main>
        </div>
    );
}
