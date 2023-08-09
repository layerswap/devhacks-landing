import DevhacksLogo from './DevhacksLogo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useScrollDirection } from '@/lib/utils'


const Header = () => {

    const router = useRouter()

    const scrollDirection = useScrollDirection();

    return (
        <header className={`inset-x-0 z-50 w-full mx-auto sticky border-b border-transparent lg:border-white/10 backdrop-blur-md bg-opacity-50 bg-darkblue-900 ${scrollDirection === "down" ? "-top-32" : "top-0"} transition-all duration-500`}>
            <nav className="grid grid-cols-2 items-center border-b border-white/10 lg:border-transparent justify-between px-6 py-3 lg:px-8 max-w-6xl mx-auto" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" aria-label='Home' className="-m-1.5 p-1.5">
                        <DevhacksLogo className='h-8 w-auto text-primary' />
                    </Link>
                </div>
                <div className="flex justify-end">
                    <button className='text-xs font-bold py-2 px-3 rounded-full text-white bg-primary hover:bg-primary-700 active:bg-primary-800 transition-colors duration-200'>
                        Apply now
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header