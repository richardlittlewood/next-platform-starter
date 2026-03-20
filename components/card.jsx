export function Card({ title, children, className }) {
    return (
        <div className={['bg-white/[0.03] rounded-md text-[#9CA3AF] border border-white/5', className].filter(Boolean).join(' ')}>
            <div className="flex flex-col gap-4 px-6 py-8">
                {title && <h3 className="text-[#F0F2F5]">{title}</h3>}
                {children}
            </div>
        </div>
    );
}
