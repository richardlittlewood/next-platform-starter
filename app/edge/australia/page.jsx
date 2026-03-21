import EdgeFunctionExplainer from '../explainer';

export const metadata = {
    title: 'In Australia',
    description: 'Edge Function geo-routing detected an Australian visitor'
};

export default function Page() {
    return (
        <>
            <h1 className="mb-8">You are in Australia!</h1>
            <EdgeFunctionExplainer />
        </>
    );
}
