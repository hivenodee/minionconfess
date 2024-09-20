// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Minions Community',
  description: 'Anonymous Minion Confessions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
