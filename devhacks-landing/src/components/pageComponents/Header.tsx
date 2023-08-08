import LayerswapLogo from './LayerswapLogo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useScrollDirection } from '@/lib/utils'


const Header = () => {

    const router = useRouter()

    const navigation = {
        personal: [
            { name: 'Explorer', target: '_blank', href: '/explorer' },
            { name: 'Testnet', target: '_blank', href: 'https://testnet.layerswap.io/' },
            { name: 'Docs', target: '_blank', href: 'https://docs.layerswap.io/user-docs/' },
        ],
        business: [
            { name: 'Product', target: '_self', href: '/business' },
            { name: 'Company', target: '_self', href: '/business/company' },
            { name: 'FAQ', target: '_self', href: '/business/faq' },
            { name: 'Docs', target: '_blank', href: 'https://docs.layerswap.io/onboarding-sdk/' },
        ]
    }
    const scrollDirection = useScrollDirection();

    return (
        <header className={`inset-x-0 z-50 w-full mx-auto sticky border-b border-transparent lg:border-white/10 backdrop-blur-md bg-opacity-50 bg-darkblue-900 ${scrollDirection === "down" ? "-top-32" : "top-0"} transition-all duration-500`}>
            <nav className="grid grid-cols-2 items-center border-b border-white/10 lg:border-transparent justify-between px-6 py-3 lg:px-8 max-w-6xl mx-auto" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" aria-label='Home' className="-m-1.5 p-1.5">
                        <LayerswapLogo className='h-8 w-auto text-primary' />
                    </Link>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 justify-end">
                    {navigation.business.map((item) => (
                        <Link key={item.name} href={item.href} target={item.target} className="text-sm font-semibold leading-6 text-white hover:opacity-70 transition-all duartion-200 flex items-center">
                            <p>{item.name}</p>
                        </Link>
                    ))}
                </div>
            </nav>
            <nav className={`flex flex-row gap-2 items-center border-b border-white/10 lg:border-transparent p-3 lg:px-8 max-w-6xl mx-auto lg:hidden transition-all duration-500`}>
                {navigation.business.map((n, index) => (
                    <Link key={index} target={n.target} className={`text-xs rounded-full w-full sm:w-fit text-center px-3 py-1 border border-white/10 bg-darkblue-500 bg-blur-md bg-opacity-30 ${router.pathname === n.href && 'brightness-200'}`} href={n.href}>
                        {n.name}
                    </Link>
                ))}
            </nav>
        </header>
    )
}

export default Header