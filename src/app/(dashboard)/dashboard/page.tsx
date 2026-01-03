'use client'

import { useState } from 'react'
import DashboardHeader from "@/components/dashboard/DashboardHeader"
import ApiKeysTable from "@/components/dashboard/ApiKeysTable"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// Mock data for demonstration
const mockApiKeys = [
    {
        id: '1',
        keyId: 'key_8f3c...a91d',
        createdBy: '2025-30-14 · 2 weeks ago',
        status: 'Active' as const
    },
    {
        id: '2',
        keyId: 'key_8f3c...a91d',
        createdBy: '2025-09-20 · 3 months ago',
        status: 'Active' as const
    },
    {
        id: '3',
        keyId: 'key_8f3c...a91d',
        createdBy: '2025-01-14 · 2 hours ago',
        status: 'Inactive' as const
    },
]

export default function DashboardPage() {
    const [showKeys, setShowKeys] = useState(true) // Toggle to test empty state

    return (
        <>
            <DashboardHeader title="API keys" />
            <div className="py-8 px-8">
                {/* Pricing Dropdown */}
                <div className="mb-6">
                    <Select>
                        <SelectTrigger className="w-full max-w-xs bg-white border-neutral-300">
                            <SelectValue placeholder="See API key pricing details" />
                        </SelectTrigger>
                        <SelectContent className='bg-neutral-100'>
                            <div className="p-4 space-y-3 ">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-neutral-900">Price</span>
                                    <span className="text-sm text-neutral-900">$5</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-neutral-900">Network</span>
                                    <span className="text-sm text-neutral-900">EVM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-neutral-900">Recipient</span>
                                    <span className="text-sm text-neutral-900">RaidGuild</span>
                                </div>
                            </div>
                        </SelectContent>
                    </Select>
                </div>

               <div className="max-w-[593px]">
                 {/* Section Header */}
                <div className="mb-6">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <h2 className="text-3xl font-bold text-moloch-900 font-serif mb-1">
                                List of API keys
                            </h2>
                            <p className="text-sm text-neutral-600">
                                Find below a list of all generated API keys
                            </p>
                        </div>
                        <button 
                            className="bg-[#2D1810] hover:bg-[#3D2418] text-white px-6 py-2 rounded-lg text-sm font-normal transition-colors whitespace-nowrap"
                            onClick={() => alert('Generate new key functionality coming soon!')}
                        >
                            Generate new key
                        </button>
                    </div>
                </div>

                {/* API Keys Table */}
                <ApiKeysTable apiKeys={showKeys ? mockApiKeys : []} />
               </div>
            </div>
        </>
    )
}
