import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="bg-white shadow p-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600"> FridgeFlow </Link>
            <div className="space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Start</Link>
            <Link href="/fridge" className="text-gray-700 hover:text-blue-600">Kühlschrank</Link>
            <Link href="/shopping" className="text-gray-700 hover:text-blue-600">Einkaufsliste</Link>
            <Link href="/settings" className="text-gray-700 hover:text-blue-600">Einstellungen</Link>
            </div>
        </nav>
    )
}