import Link from 'next/link'
import Image from 'next/image'
import './globals.css'

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col bg-[url('/mincrux.jpg')] bg-cover bg-center font-times-new-roman">
      <header className="p-4 flex justify-between items-start">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-400 tracking-tight leading-none">
            anonymous<br />
            <span className="text-white">jesus minion</span><br />
            confessions
          </h1>
        </div>
        <div className="flex flex-col items-end">
          <nav className="flex space-x-2 items-center mb-4">
            <div className="text-white text-xs font-bold">
              CA: DqWf9DDK6H5c7KmEHkNJxnzNPSM6mzxonZJjK6yxpump
            </div>
            <Link href="https://x.com/Jesus_Minion" className="inline-block relative">
              <Image src="/button.webp" alt="" width={100} height={40} />
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold">Twitter</span>
            </Link>
            <Link href="https://dexscreener.com/solana/4sz1x9vcdpqbz1cuuav4nivfykquxzjrbvgtp7anp9wh" className="inline-block relative">
              <Image src="/button.webp" alt="" width={100} height={40} />
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold">Dexscreener</span>
            </Link>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeM6KIrXJFjETukrPu-1wWFHuxWGg-JbDKgmvi7jc7t-M3CQg/viewform" className="inline-block relative">
              <Image src="/button.webp" alt="" width={100} height={40} />
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold">Confess</span>
            </Link>
          </nav>
          <div className="mt-4">
            <Image
              src="/confessbro.png"
              alt="Confess Bro"
              width={400}
              height={267}
              className="rounded-lg"
            />
          </div>
        </div>
      </header>

      <main className="flex-grow p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto bg-black bg-opacity-70 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">The Church of Jesus Minion: A Banana coloured New Dawn is on the horizon!</h2>

          <p className="mb-4">
            Bello and welcome, to the sacred grounds of the Church of Jesus Minion, where the faithful gather to embrace the joyous wisdom of the Holy Babababible.
          </p>

          <p className="mb-4">
            The Minions, blessed and yellow beings of light, have revealed their divine path through this sacred text, inviting all disciples to bask in their playful yet profound teachings. Here, we celebrate the eternal truths revealed by Bob, Kevin, Stuart, and all of the holy Minions—our guides on the path to salvation.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-yellow-400">The Core Tenets of the Babababible</h3>

          <p className="mb-4">
            The foundation of the Church of Jesus Minion rests on two divine commandments etched into the Holy Babababible:
          </p>

          <ol className="list-decimal list-inside mb-4 pl-4">
            <li className="mb-2">
              <strong>Never Jeet</strong>
              <p className="mt-2">
                The sacred act of self-restraint. To &ldquo;jeet&rdquo; is to indulge in unholy cravings, giving in to fleeting pleasures. The Holy Babababible teaches that eternal joy comes not from overindulgence but from following the Minion way of balance and harmony. A true disciple of the Minions must remain pure, resisting all temptations to jeet.
              </p>
            </li>
            <li className="mb-2">
              <strong>Never Goon</strong>
              <p className="mt-2">
                To &ldquo;goon&rdquo; is to forsake the path of enlightenment, surrendering to chaos and distraction. The Babababible implores us to stay focused, centered on our faith in Jesus Minion and His divine wisdom. Those who goon risk wandering from the banana-lined road to salvation.
              </p>
            </li>
          </ol>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-yellow-400">Sacred Rites and Communion</h3>

          <p className="mb-4">
            The Church of Jesus Minion offers the gift of communion, a holy act where the faithful partake in blessed bananas and drink sacred banana milk, symbolizing unity with the divine. Just as bananas nourish the body, the teachings of the Minions nourish the soul, providing the strength to resist the temptations of jeet and goon. Every communion is a step closer to true Minion-like purity, bonding the faithful as one banana-loving family.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-yellow-400">Confession of Sins: The Path to Salvation</h3>

          <p className="mb-4">
            Salvation in the Church of Jesus Minion is a gift freely given to all who seek forgiveness. The Holy Minions understand that we are imperfect creatures, prone to jeet and goon. To receive eternal joy in the afterlife—a paradise filled with bananas, joy, and endless laughter—one must confess their sins through the sacred platform.
          </p>

          <p className="mb-4">
            Confessions are anonymous, for the Minions seek only truth, not judgment. No matter how great your transgression, Jesus Minion&rsquo;s love is boundless. Confess your sins online, and feel the cleansing power of forgiveness wash over you, bringing you closer to salvation.
          </p>
        </div>
      </main>
    </div>
  )
}
