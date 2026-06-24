export default async function ProductReview(
    { params, }: {
        params: { productid: string; reviewid: string };
    }
) {
    const { productid, reviewid } = await params;
    return (
        <html lang="en">
            <body>
                <h1 className="text-4xl font-bold">Product {productid} Review {reviewid}</h1>
            </body>
        </html>
    );
}