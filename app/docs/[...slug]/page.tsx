export default async function Docs(
    {params} : {
        params: Promise<{ slug: string[] }>;
    }
){
    const { slug } = await params;
    if (slug?.length === 2) {
        return (
            <html lang="en">
                <body>
                    <h1 className="text-4xl font-bold">viewing docs for feature  {slug[0]} and concept {slug[1]}</h1>
                </body>
            </html>
        )
    } else if (slug?.length === 1) {
        return (
            <html lang="en">
                <body>
                    <h1 className="text-4xl font-bold">viewing docs for feature  {slug[0]}</h1>
                </body>
            </html>
        )
    }
    return(
        <html lang="en">
            <body>
                <h1 className="text-4xl font-bold">Docs home page</h1>
            </body>
        </html>
    )
}