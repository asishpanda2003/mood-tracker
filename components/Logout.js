'use client'
import React from 'react'
import Button from './Button'
import { useAuth } from '@/context/AuthContext'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Logout() {
    const { logout, currentUser } = useAuth()
    const pathname = usePathname()
    const router = useRouter()

    if (!currentUser) {
        return null
    }

    const handleLogout = () => {
        logout()
        router.push('/')
    }

    if (pathname === '/') {
        return (
            <Link href={'/dashboard'}>
                <Button text="Go to dashboard" />
            </Link>
        )
    }

    return (
        <Button text='Logout' clickHandler={handleLogout} />
    )
}
