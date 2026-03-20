export function Card({ title, children, className }) {
    return (
        <div className={['bg-white/60 rounded-md text-[#4a5a3c] border border-[#28371c]/10', className].filter(Boolean).join(' ')}>
            <div className="flex flex-col gap-4 px-6 py-8">
                {title && <h3 className="text-[#28371c]">{title}</h3>}
                {children}
            </div>
        </div>
    );
}
