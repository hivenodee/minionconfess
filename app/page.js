import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col bg-[url('/church.jpeg')] bg-cover bg-center">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400 text-2xl">×</span>
          <span className="text-yellow-400 font-bold">Minions Community</span>
        </div>
        <nav className="space-x-4">
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

      {/* Main Content */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-center p-8 space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            anonymous<br />minion<br />confessions
          </h1>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeM6KIrXJFjETukrPu-1wWFHuxWGg-JbDKgmvi7jc7t-M3CQg/viewform" className="inline-block relative">
            <Image src="/button.webp" alt="" width={150} height={50} />
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold">Confess</span>
          </Link>
        </div>

        {/* Sample Confession */}
        <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <Image
              src="/minion-avatar.png"
              alt="Minion"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="ml-3">
              <p className="font-semibold">Minion Confessions</p>
              <p className="text-gray-400">@minionconfessions</p>
            </div>
          </div>
          <p className="text-lg mb-4">I secretly love bananas more than anything else!</p>
          <div className="bg-yellow-400 text-black p-4 rounded">
            <p className="text-sm">
              I've been hiding bananas all over Gru's lab. Every time someone finds one, I blame it on another minion!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-8">
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Replace with actual images/logos */}
          {[1, 2, 3, 4, 5].map((i) => (
            <Image
              key={i}
              src={`/media-logo-${i}.png`}
              alt={`Media Logo ${i}`}
              width={100}
              height={50}
              className="opacity-50 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </footer>
    </div>
  )
}
