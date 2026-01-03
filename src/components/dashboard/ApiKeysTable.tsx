'use client'

import StatusBadge from '@/components/ui/StatusBadge'

interface ApiKey {
    id: string
    keyId: string
    createdBy: string
    status: 'Active' | 'Inactive'
}

interface ApiKeysTableProps {
    apiKeys: ApiKey[]
}

export default function ApiKeysTable({ apiKeys }: ApiKeysTableProps) {
    if (apiKeys.length === 0) {
        return (
            <div className="rounded-md border border-neutral-300 bg-white p-12 text-center">
                <h3 className="mb-2 text-lg font-medium text-moloch-900">No API Keys Found</h3>
                <p className="text-neutral-600 mb-4">Generate your first API key to get started.</p>
                <button className="bg-[#2D1810] hover:bg-[#3D2418] text-white px-6 py-2 rounded-lg text-sm font-normal transition-colors">
                    Generate new key
                </button>
            </div>
        )
    }

    return (
        <div className="rounded-md border border-neutral-300 bg-white overflow-hidden">
            <table className="w-full border-collapse">
                <thead className="border-b border-neutral-300">
                    <tr>
                        <th className="px-6 py-3 text-left type-body-base font-medium text-neutral-900 border-r border-neutral-300">
                            API Key ID
                        </th>
                        <th className="px-6 py-3 text-left type-body-base font-medium text-neutral-900 border-r border-neutral-300">
                            Created by
                        </th>
                        <th className="px-6 py-3 text-left type-body-base font-medium text-neutral-900">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {apiKeys.map((key, index) => (
                        <tr
                            key={key.id}
                            className={index !== apiKeys.length - 1 ? 'border-b border-neutral-300' : ''}
                        >
                            <td className="px-6 py-4 type-body-base text-neutral-900 border-r border-neutral-300">
                                {key.keyId}
                            </td>
                            <td className="px-6 py-4 type-body-base text-neutral-900 border-r border-neutral-300">
                                {key.createdBy}
                            </td>
                            <td className="px-6 py-4">
                                <StatusBadge status={key.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
