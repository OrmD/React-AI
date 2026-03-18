'use client';

import {FC} from "react";
import {LogoUI} from "@/core/shared/ui/logo";
import cn from "@/core/shared/utils/cn";
import {LinkUI} from "@/core/shared/ui/link";
import {ClearButtonUi} from "@/core/shared/ui/buttons/clear-button";

interface IHeaderComponent {
    className?: string
}

const navItems =[
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'How It Works',
        href: '/'
    },
    {
        name: 'Latest Contracts Post',
        href: '/'
    },
]

const HeaderComponent:FC<IHeaderComponent> = (({className}) => {

    return(
        <header className={cn('absolute px-2.5 z-[100] top-5 w-full ', className)}>
            <nav className='w-full flex-wrap flex md:flex-row flex-col max-w-[1360px] gap-1 px-5 py-3  rounded-[60px] bg-[#ffffff50] backdrop-blur-[42px]  items-center justify-between mx-auto px-3'>
                <LogoUI />

                <ul className='flex gap-4'>
                        {
                            navItems && navItems.map((item, index) => (
                                <li key={index}>
                                    <LinkUI href={item.href} className='hover:text-[#0935FE]'>
                                        {item.name}
                                    </LinkUI>
                                </li>
                            ))
                        }
                </ul>

                <div className='flex gap-1'>
                <ClearButtonUi>
                    <LinkUI href='/'>Login</LinkUI>
                </ClearButtonUi>
                <ClearButtonUi  variant={'withBorder'}>
                    <LinkUI href='/'>Register</LinkUI>
                </ClearButtonUi>
                </div>

            </nav>
        </header>
    )
})
export default HeaderComponent