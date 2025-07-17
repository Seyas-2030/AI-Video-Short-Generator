"use client"
import { SidebarProvider } from '@/components/ui/sidebar'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useAuthContext } from '../provider'
import AppHeader from './_components/AppHeader'
import AppSidebar from './_components/AppSidebar'

function DashboardProvider({ children }) {

    const { user } = useAuthContext();
    const router = useRouter();
    useEffect(() => {
        user && CheckedUserAuthenticated();
    }, [user]);

    const CheckedUserAuthenticated = () => {
        if (!user) {
            router.replace('/');
        }
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <div className='w-full'>
                <AppHeader />
                <div className='p-10'>

                    {children}
                </div>
            </div>
        </SidebarProvider>
    )
}

export default DashboardProvider