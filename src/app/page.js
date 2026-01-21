import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-900 text-white font-sans">
            <main className="min-h-screen w-full flex-col text-7xl font-extrabold tracking-tighter py-32 px-16">
                <h1>Hello Welcome</h1>
                <h1>Store House</h1>
                <div id='sifad' className='text-5xl text-blue-400 font-bold'>
                  <h3>MD. SIFAD ISLAM</h3>
                </div>
                 <div id='hasib' className='text-5xl text-blue-400 font-bold'>
                  <h3>MD. HASIB ISLAM</h3>
                </div>
            </main>
        </div>
    );
}
