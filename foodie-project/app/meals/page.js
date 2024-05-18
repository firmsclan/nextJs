import Link from 'next/link'

export default function Meals() {
    return (
      <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          Time to get started!
        </h1>
        <p><Link href ="/">Home</Link></p>
        <p><Link href ="/community">Community</Link></p>
        <p><Link href ="/meals/share">Share</Link></p>
      </main>
)
}