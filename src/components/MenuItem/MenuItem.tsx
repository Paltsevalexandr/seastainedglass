import React from 'react';
import Link from 'next/link';

type Props = {
    children?: React.ReactNode,
    href: string
}

export default function MenuItem(props: Props) {
    let {children, href} = props;
    return (
        <li className='menu__item'>
            <Link href={{pathname: href}}>
                {children}
            </Link>
        </li>
    )
}
