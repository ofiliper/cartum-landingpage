

export default function Button({ label, className = '', onClick }: { label: string, className?: string; onClick: () => void }) {
    return (
        <button
            onClick={() => { onClick && onClick() }}
            className={`relative bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300 overflow-hidden ${className}`}>
            <span className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent opacity-60 rounded-full m-[4px]"></span>
            <span className="relative text-shadow">{label}</span>
        </button>
    )
}