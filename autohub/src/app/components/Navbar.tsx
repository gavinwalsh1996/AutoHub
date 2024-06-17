import Link from "next/link"
import Image from "next/image"

import CustomButton from "./CustomButton"

function Navbar() {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-purple-500">
            <Link href="/" className="flex justofy-center items-center">
                <Image src="/logo.svg" alt="AutoHub Logo" width={118}
                height={18} className="object-contain"></Image>
            </Link>   
        </nav>
    </header>
  )
}

export default Navbar