import { cn } from '@/lib/utils'

interface StatusBadgeProps {
    status: 'Active' | 'Inactive'
    className?: string
}

export default function StatusBadge({ status, className }: StatusBadgeProps) {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
                status === 'Active'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800',
                className
            )}
        >
            {status}
        </span>
    )
}
