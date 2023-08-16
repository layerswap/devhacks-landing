import Link from "next/link"

const Footer = () => {

    const footerNavigation = {
        main: [
            { name: 'Product', href: '/' },
            { name: 'Company', href: '/company' },
            { name: 'FAQ', href: '/faq' },
            { name: 'Privacy Policy', href: 'https://docs.layerswap.io/information/privacy-policy' },
            { name: 'Terms of Services', href: 'https://docs.layerswap.io/information/terms-of-services' },
            { name: 'Docs', href: 'https://docs.layerswap.io/onboarding-sdk/' },
        ],
        social: [
            {
                name: 'Twitter',
                href: 'https://twitter.com/layerswap',
                icon: (props: any) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                ),
            },
            {
                name: 'Discord',
                href: 'https://discord.gg/layerswap',
                icon: (props: any) => (
                    <svg {...props} aria-hidden="true" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)"><path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor">
                        </path></g><defs><clipPath id="clip0"><rect width="71" height="55" fill="white"></rect></clipPath></defs>
                    </svg>
                ),
            },
            {
                name: 'GitHub',
                href: 'https://github.com/layerswap/layerswapapp',
                icon: (props: any) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                name: 'YouTube',
                href: 'https://www.youtube.com/@layerswaphq',
                icon: (props: any) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
        ],
    }

    return (
        <footer aria-labelledby="footer-heading" className="relative">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-6xl overflow-hidden px-6 py-6 flex flex-col md:flex-row md:justify-between gap-5 items-center lg:px-8">
                <div className="flex justify-center space-x-6 order-2">
                    {footerNavigation.social.map((item) => (
                        <Link target="_blank" key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </Link>
                    ))}
                </div>
                <div className="mt-3 order-1 flex gap-2 items-center md:mt-0">
                    <p className="text-center text-base text-white leading-6">
                        powered by
                    </p>
                    <Link href={'https://www.layerswap.io/'} target="_blank" className="hover:opacity-80">
                        <svg xmlns="http://www.w3.org/2000/svg" width="123" height="32" viewBox="0 0 123 32" fill="none">
                            <path d="M40.5869 22.9383C40.3469 22.9383 40.1523 22.7418 40.1523 22.4994V11.5854C40.1523 11.343 40.3469 11.1465 40.5869 11.1465H42.2846C42.5247 11.1465 42.719 11.343 42.719 11.5854V20.7472H47.6831C47.9229 20.7472 48.1176 20.9437 48.1176 21.1861V22.4994C48.1176 22.7418 47.9229 22.9383 47.6831 22.9383H40.5869Z" fill="white" />
                            <path d="M52.1795 23.1223C51.5726 23.1223 51.0371 23.0052 50.5734 22.7711C50.1098 22.5369 49.7398 22.2191 49.464 21.8177C49.1987 21.4162 49.0664 20.9646 49.0664 20.4629C49.0664 19.8719 49.221 19.398 49.5301 19.0412C49.8392 18.6843 50.3414 18.4334 51.0371 18.2885C51.7324 18.1324 52.6545 18.0543 53.8025 18.0543H54.1169C54.2727 18.0543 54.3984 17.927 54.3984 17.77C54.3984 17.2794 54.2881 16.9337 54.0674 16.733C53.8467 16.5211 53.4711 16.4152 52.9413 16.4152C52.4999 16.4152 52.0306 16.4876 51.5336 16.6326C51.1945 16.7261 50.855 16.855 50.5154 17.0193C50.2785 17.1339 49.9889 17.0334 49.8899 16.7877L49.5321 15.8969C49.4538 15.7024 49.5224 15.4776 49.7049 15.378C49.9236 15.2591 50.1686 15.1477 50.4408 15.0436C50.8602 14.8875 51.2963 14.7705 51.749 14.6924C52.2018 14.6032 52.6322 14.5586 53.0407 14.5586C54.2994 14.5586 55.2377 14.8485 55.856 15.4283C56.4742 15.997 56.7833 16.8835 56.7833 18.0878V22.4994C56.7833 22.7418 56.5886 22.9383 56.3489 22.9383H54.8828C54.643 22.9383 54.4483 22.7418 54.4483 22.4994V21.7006C54.2828 22.1355 54.0013 22.4811 53.6037 22.7376C53.2175 22.9941 52.7425 23.1223 52.1795 23.1223ZM52.7425 21.433C53.2062 21.433 53.5981 21.2713 53.9185 20.9479C54.2386 20.6245 54.3984 20.2064 54.3984 19.6935C54.3984 19.5087 54.2504 19.359 54.0674 19.359H53.8191C52.9689 19.359 52.3673 19.437 52.0139 19.5931C51.6606 19.7381 51.4842 19.9945 51.4842 20.3625C51.4842 20.6747 51.5888 20.9312 51.7985 21.1319C52.0196 21.3326 52.334 21.433 52.7425 21.433Z" fill="white" />
                            <path d="M59.8716 25.9497C59.5556 25.9497 59.3451 25.6199 59.4757 25.3293L60.7535 22.4874L57.6733 15.3407C57.5484 15.0508 57.7585 14.7266 58.0717 14.7266H59.7459C59.9243 14.7266 60.0846 14.8368 60.1499 15.0045L62.0784 19.9451L64.0714 15C64.138 14.8347 64.297 14.7266 64.4738 14.7266H65.9979C66.3119 14.7266 66.5224 15.053 66.3951 15.3431L61.8618 25.6884C61.792 25.8473 61.6362 25.9497 61.4642 25.9497H59.8716Z" fill="white" />
                            <path d="M71.4248 23.1223C70.4646 23.1223 69.6362 22.9495 68.9409 22.6038C68.2565 22.247 67.7264 21.7508 67.3511 21.1152C66.9868 20.4684 66.8047 19.7102 66.8047 18.8404C66.8047 17.993 66.9812 17.2515 67.3345 16.6159C67.6988 15.9692 68.19 15.4674 68.8083 15.1105C69.4378 14.7426 70.1607 14.5586 70.9777 14.5586C72.159 14.5586 73.0973 14.9377 73.793 15.6959C74.4883 16.4431 74.836 17.4578 74.836 18.7401V18.9367C74.836 19.1792 74.6417 19.3757 74.4015 19.3757H69.1892C69.2776 20.0224 69.5092 20.4963 69.8849 20.7974C70.2711 21.0873 70.8013 21.2323 71.4747 21.2323C71.916 21.2323 72.3631 21.1654 72.8158 21.0315C73.0791 20.9537 73.3273 20.8514 73.5606 20.7246C73.8137 20.5871 74.1459 20.6798 74.2518 20.9497L74.582 21.7917C74.6538 21.9751 74.597 22.1864 74.4319 22.2918C74.0786 22.5176 73.6669 22.7052 73.1967 22.8547C72.6117 23.0331 72.0211 23.1223 71.4248 23.1223ZM71.0771 16.2312C70.5473 16.2312 70.1165 16.3929 69.7855 16.7162C69.4654 17.0396 69.2666 17.4912 69.1892 18.0711H72.7663C72.6998 16.8445 72.1371 16.2312 71.0771 16.2312Z" fill="white" />
                            <path d="M76.7235 22.9383C76.4834 22.9383 76.2891 22.7418 76.2891 22.4993V15.1647C76.2891 14.9223 76.4834 14.7258 76.7235 14.7258H78.3052C78.5454 14.7258 78.7397 14.9223 78.7397 15.1647V16.1475C79.1263 15.1885 79.9542 14.6589 81.2239 14.5585L81.5201 14.5381C81.759 14.5217 81.9663 14.7037 81.9829 14.945L82.0718 16.2097C82.0884 16.4456 81.9168 16.6523 81.684 16.6772L80.6937 16.7831C79.4573 16.9058 78.8391 17.5413 78.8391 18.6899V22.4993C78.8391 22.7418 78.6447 22.9383 78.4046 22.9383H76.7235Z" fill="white" />
                            <path d="M86.1467 23.1223C85.4291 23.1223 84.7613 23.0387 84.1431 22.8714C83.6592 22.7406 83.2401 22.5722 82.8848 22.3663C82.714 22.2673 82.6503 22.0558 82.718 21.8691L83.015 21.0525C83.1099 20.7914 83.4186 20.6848 83.6665 20.8063C83.9521 20.9463 84.26 21.066 84.5902 21.1654C85.12 21.3103 85.6445 21.3828 86.1633 21.3828C86.627 21.3828 86.9694 21.3103 87.19 21.1654C87.4107 21.0092 87.5211 20.8085 87.5211 20.5632C87.5211 20.173 87.2395 19.9276 86.6765 19.8273L84.9378 19.5095C84.2425 19.3868 83.7123 19.1359 83.348 18.7568C82.9837 18.3777 82.8016 17.8815 82.8016 17.2682C82.8016 16.7107 82.9562 16.2312 83.2653 15.8298C83.5744 15.4283 83.9995 15.1161 84.5403 14.8931C85.0814 14.6701 85.7049 14.5586 86.4116 14.5586C86.9969 14.5586 87.5653 14.6366 88.1174 14.7927C88.5547 14.9076 88.9437 15.0785 89.2841 15.3054C89.4423 15.411 89.4942 15.6166 89.4252 15.7951L89.1182 16.5864C89.0143 16.8547 88.6853 16.951 88.4326 16.8176C88.2156 16.7031 87.9778 16.6024 87.7198 16.5155C87.2671 16.3594 86.8424 16.2814 86.4448 16.2814C85.9479 16.2814 85.5893 16.365 85.3682 16.5323C85.1475 16.6884 85.0372 16.8891 85.0372 17.1344C85.0372 17.5247 85.2968 17.77 85.8157 17.8703L87.5543 18.1881C88.2719 18.3108 88.8184 18.5561 89.1936 18.9241C89.5693 19.2809 89.7567 19.7715 89.7567 20.3959C89.7567 21.2546 89.4256 21.9236 88.7632 22.4031C88.1008 22.8826 87.2286 23.1223 86.1467 23.1223Z" fill="white" />
                            <path d="M93.6153 22.939C93.4389 22.939 93.2798 22.831 93.2129 22.6657L90.2552 15.331C90.1388 15.0424 90.3489 14.7266 90.6576 14.7266H92.243C92.4243 14.7266 92.587 14.8407 92.6502 15.0126L94.4826 19.9953L96.3146 15.0126C96.3779 14.8407 96.5405 14.7266 96.7223 14.7266H97.7725C97.9547 14.7266 98.1178 14.8415 98.1806 15.0143L100.013 20.0622L101.847 15.0143C101.909 14.8415 102.072 14.7266 102.254 14.7266H103.708C104.016 14.7266 104.227 15.0412 104.111 15.3296L101.183 22.6643C101.117 22.8303 100.957 22.939 100.78 22.939H99.2516C99.0719 22.939 98.9108 22.8276 98.8463 22.6586L97.1653 18.2725L95.5325 22.6547C95.4688 22.8258 95.3065 22.939 95.1256 22.939H93.6153Z" fill="white" />
                            <path d="M107.875 23.1223C107.268 23.1223 106.732 23.0052 106.269 22.7711C105.805 22.5369 105.435 22.2191 105.159 21.8177C104.894 21.4162 104.762 20.9646 104.762 20.4629C104.762 19.8719 104.916 19.398 105.225 19.0412C105.535 18.6843 106.037 18.4334 106.732 18.2885C107.428 18.1324 108.35 18.0543 109.498 18.0543H110.094V17.77C110.094 17.2794 109.984 16.9337 109.763 16.733C109.542 16.5211 109.167 16.4152 108.637 16.4152C108.195 16.4152 107.726 16.4876 107.229 16.6326C106.89 16.7261 106.55 16.855 106.211 17.0193C105.974 17.1339 105.684 17.0334 105.586 16.7877L105.227 15.8969C105.15 15.7024 105.218 15.4776 105.401 15.378C105.619 15.2591 105.864 15.1477 106.136 15.0436C106.556 14.8875 106.992 14.7705 107.444 14.6924C107.897 14.6032 108.327 14.5586 108.736 14.5586C109.995 14.5586 110.933 14.8485 111.551 15.4283C112.17 15.997 112.479 16.8835 112.479 18.0878V22.4994C112.479 22.7418 112.284 22.9383 112.044 22.9383H110.578C110.338 22.9383 110.144 22.7418 110.144 22.4994V21.7006C109.978 22.1355 109.697 22.4811 109.299 22.7376C108.913 22.9941 108.438 23.1223 107.875 23.1223ZM108.438 21.433C108.902 21.433 109.294 21.2713 109.614 20.9479C109.934 20.6245 110.094 20.2064 110.094 19.6935V19.359H109.514C108.664 19.359 108.063 19.437 107.709 19.5931C107.356 19.7381 107.179 19.9945 107.179 20.3625C107.179 20.6747 107.285 20.9312 107.494 21.1319C107.715 21.3326 108.03 21.433 108.438 21.433Z" fill="white" />
                            <path d="M114.779 25.949C114.538 25.949 114.344 25.7525 114.344 25.5101V15.1648C114.344 14.9223 114.538 14.7258 114.779 14.7258H116.36C116.6 14.7258 116.795 14.9223 116.795 15.1648V15.9469C117.015 15.5231 117.352 15.1886 117.805 14.9433C118.269 14.6868 118.787 14.5586 119.361 14.5586C120.068 14.5586 120.686 14.7314 121.216 15.0771C121.757 15.4228 122.177 15.9134 122.475 16.549C122.773 17.1846 122.922 17.9428 122.922 18.8237C122.922 19.7046 122.773 20.4684 122.475 21.1152C122.177 21.7508 121.757 22.247 121.216 22.6038C120.686 22.9495 120.068 23.1223 119.361 23.1223C118.821 23.1223 118.324 23.0052 117.871 22.7711C117.43 22.5369 117.087 22.2247 116.844 21.8344V25.5101C116.844 25.7525 116.65 25.949 116.41 25.949H114.779ZM118.616 21.2323C119.146 21.2323 119.577 21.0371 119.908 20.6469C120.239 20.2566 120.405 19.6489 120.405 18.8237C120.405 18.0097 120.239 17.4132 119.908 17.034C119.577 16.6438 119.146 16.4486 118.616 16.4486C118.075 16.4486 117.639 16.6438 117.308 17.034C116.977 17.4132 116.811 18.0097 116.811 18.8237C116.811 19.6489 116.977 20.2566 117.308 20.6469C117.639 21.0371 118.075 21.2323 118.616 21.2323Z" fill="white" />
                            <path opacity="0.6" d="M4.78125 6.57237C4.78125 5.39924 5.73224 4.44824 6.90538 4.44824H25.2258C26.3989 4.44824 27.3499 5.39924 27.3499 6.57237V24.8928C27.3499 26.0659 26.3989 27.0169 25.2258 27.0169H6.90538C5.73224 27.0169 4.78125 26.0659 4.78125 24.8928V6.57237Z" fill="white" />
                            <path opacity="0.5" d="M8.94922 10.7413C8.94922 9.56818 9.90021 8.61719 11.0733 8.61719H29.3938C30.5669 8.61719 31.5179 9.56818 31.5179 10.7413V29.0617C31.5179 30.2348 30.5669 31.1858 29.3938 31.1858H11.0733C9.90021 31.1858 8.94922 30.2348 8.94922 29.0617V10.7413Z" fill="white" />
                            <path opacity="0.9" d="M0.613281 2.40243C0.613281 1.22932 1.56428 0.27832 2.73739 0.27832H21.0578C22.231 0.27832 23.182 1.22932 23.182 2.40243V20.7229C23.182 21.896 22.231 22.847 21.0578 22.847H2.73739C1.56428 22.847 0.613281 21.896 0.613281 20.7229V2.40243Z" fill="white" />
                        </svg>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer