import Link from 'next/link'
import Image from 'next/image'
import './globals.css'

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col bg-[url('/mincrux.jpg')] bg-cover bg-center font-times-new-roman">
      <header className="p-4 flex justify-between items-start">
      <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-400 tracking-tight leading-none">
            Anonymous<br />
            <span className="text-white">Jesus $Minion</span><br />
            Confessions
          </h1>
          <div className="mt-4">
            <Image
              src="/confessbro.png"
              alt="Confess Bro"
              width={300}  // Adjust this value to match your image's width
              height={200} // Adjust this value to match your image's height
              className="rounded-lg"
            />
          </div>
        </div>
        <nav className="space-y-4">
          <Link href="https://x.com/Jesus_Minion" className="inline-block relative">
            <Image src="/button.webp" alt="" width={100} height={40} />
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold">Twitter</span>
          </Link>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeM6KIrXJFjETukrPu-1wWFHuxWGg-JbDKgmvi7jc7t-M3CQg/viewform" className="inline-block relative">
            <Image src="/button.webp" alt="" width={100} height={40} />
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold">Confess</span>
          </Link>
        </nav>
      </header>

      <main className="flex-grow"></main>
    </div>
  )
}