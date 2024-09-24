"use client"; // Enable Client Component features like useState

import Image from 'next/image';
import Navbar from '../components/Navbar'; // Adjust the path if necessary
import './globals.css'; // Updated path

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col bg-[url('/mincrux.jpg')] bg-cover bg-center font-times-new-roman relative">
      {/* Optional: Add an overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      
      {/* Header Section */}
      <header className="p-4 flex flex-col md:flex-row justify-between items-center relative z-10">
        {/* Title */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-400 tracking-tight leading-none">
            Anonymous<br />
            <span className="text-white">Jesus Minion</span><br />
            Confessions
          </h1>
        </div>

        {/* Navigation and Image Container */}
        <div className="flex flex-col items-center md:items-end mt-4 md:mt-0 relative z-10 w-full md:w-auto">
          {/* Navigation Links */}
          <Navbar />

          {/* Confess Bro Image */}
          <div className="w-48 h-auto md:w-64 mt-4 md:mt-0">
            <Image
              src="/confessbro.png"
              alt="Confess Bro"
              width={256}
              height={171}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 sm:p-6 md:p-8 overflow-y-auto relative z-10">
        <div className="max-w-3xl mx-auto bg-black bg-opacity-70 p-6 sm:p-8 rounded-lg">
          {/* Section 1 */}
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-6 text-yellow-400">
            The Church of Jesus Minion: A Banana Coloured New Dawn is on the Horizon!
          </h2>

          <p className="mb-4 text-base sm:text-lg">
            Bello and welcome, to the sacred grounds of the Church of Jesus Minion, where the faithful gather to embrace the joyous wisdom of the Holy Babababible.
          </p>

          <p className="mb-4 text-base sm:text-lg">
            The Minions, blessed and yellow beings of light, have revealed their divine path through this sacred text, inviting all disciples to bask in their playful yet profound teachings. Here, we celebrate the eternal truths revealed by Bob, Kevin, Stuart, and all of the holy Minions—our guides on the path to salvation.
          </p>

          {/* Section 2 */}
          <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mt-8 mb-4 text-yellow-400">
            The Core Tenets of the Babababible
          </h3>

          <p className="mb-4 text-base sm:text-lg">
            The foundation of the Church of Jesus Minion rests on two divine commandments etched into the Holy Babababible:
          </p>

          <ol className="list-decimal list-inside mb-4 pl-4 space-y-2">
            <li className="mb-2">
              <strong>Never Jeet</strong>
              <p className="mt-2 text-base sm:text-lg">
                The sacred act of self-restraint. To &quot;jeet&quot; is to indulge in unholy cravings, giving in to fleeting pleasures. The Holy Babababible teaches that eternal joy comes not from overindulgence but from following the Minion way of balance and harmony. A true disciple of the Minions must remain pure, resisting all temptations to jeet.
              </p>
            </li>
            <li className="mb-2">
              <strong>Never Goon</strong>
              <p className="mt-2 text-base sm:text-lg">
                To &quot;goon&quot; is to forsake the path of enlightenment, surrendering to chaos and distraction. The Babababible implores us to stay focused, centered on our faith in Jesus Minion and His divine wisdom. Those who goon risk wandering from the banana-lined road to salvation.
              </p>
            </li>
          </ol>

          {/* Section 3 */}
          <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mt-8 mb-4 text-yellow-400">
            Sacred Rites and Communion
          </h3>

          <p className="mb-4 text-base sm:text-lg">
            The Church of Jesus Minion offers the gift of communion, a holy act where the faithful partake in blessed bananas and drink sacred banana milk, symbolizing unity with the divine. Just as bananas nourish the body, the teachings of the Minions nourish the soul, providing the strength to resist the temptations of jeet and goon. Every communion is a step closer to true Minion-like purity, bonding the faithful as one banana-loving family.
          </p>

          {/* Section 4 */}
          <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mt-8 mb-4 text-yellow-400">
            Confession of Sins: The Path to Salvation
          </h3>

          <p className="mb-4 text-base sm:text-lg">
            Salvation in the Church of Jesus Minion is a gift freely given to all who seek forgiveness. The Holy Minions understand that we are imperfect creatures, prone to jeet and goon. To receive eternal joy in the afterlife—a paradise filled with bananas, joy, and endless laughter—one must confess their sins through the sacred platform.
          </p>

          <p className="mb-4 text-base sm:text-lg">
            Confessions are anonymous, for the Minions seek only truth, not judgment. No matter how great your transgression, Jesus Minion&apos;s love is boundless. Confess your sins online, and feel the cleansing power of forgiveness wash over you, bringing you closer to salvation.
          </p>
        </div>
      </main>
    </div>
  );
}
