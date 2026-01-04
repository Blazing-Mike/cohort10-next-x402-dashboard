'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AuthButton() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    // Check authentication status on mount
    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Check if auth cookie exists by making a simple request
                const response = await fetch('/api/auth/status', {
                    credentials: 'include',
                })
                
                if (response.ok) {
                    const data = await response.json()
                    setIsAuthenticated(data.authenticated || false)
                }
            } catch (error) {
                console.error('Failed to check auth status:', error)
                setIsAuthenticated(false)
            } finally {
                setIsLoading(false)
            }
        }

        checkAuth()
    }, [])

    if (isLoading) {
        return null // Or a subtle loading indicator
    }

    if (isAuthenticated) {
        return (
            <Link href="/dashboard">
                <Button 
                    variant="primary"
                    className="bg-moloch-500 hover:bg-moloch-600 text-scroll-100 font-medium"
                >
                    Go to Dashboard
                </Button>
            </Link>
        )
    }

    return (
        <Link href="/login">
            <Button 
                variant="outline"
                className="border-scroll-100 text-moloch-800 hover:bg-scroll-100/10 hover:text-moloch-800 font-medium"
            >
                Sign In
            </Button>
        </Link>
    )
}
