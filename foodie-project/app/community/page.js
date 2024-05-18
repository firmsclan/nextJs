import Link from 'next/link'

export default function Community(){
    return (
        <main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>Community page!</h1>
            <p><Link href="meals">Meals</Link></p>
            <p><Link href="meals/share">Meals Share</Link></p>
            <p><Link href="/">Home</Link></p>
        </main>
    )
}