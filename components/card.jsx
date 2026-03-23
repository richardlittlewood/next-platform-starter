export function Card({ title, children, className }) {
    return (
        <div className={['bg-white rounded-md text-[#3E4C59] border border-[#D8E2EC]', className].filter(Boolean).join(' ')}>
            <div className="flex flex-col gap-4 px-6 py-8">
                {title && <h3 className="text-[#10243E]">{title}</h3>}
                {children}
            </div>
        </div>
    );
}
