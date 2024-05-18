import Link from 'next/link'

export default function MealsSharePage () {
    return (
        <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>meals share page!</h1>
        <p><Link href="/meals">Meals</Link></p>
        <p><Link href="/">Home</Link></p>
        <p><Link href="/community">Community</Link></p>
        </main>
    )
}