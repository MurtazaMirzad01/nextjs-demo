export default async function ProductDetails({
    params,
} :{
    params: Promise<{ productid: string }>
}) {
    const { productid } = await params;
    return (
        <html lang="en">
            <body>
                <h1 className="text-4xl font-bold">Product {productid} Details</h1>
            </body>
        </html>
    );
}