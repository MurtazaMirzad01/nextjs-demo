"use client";
import {usePathname} from "next/navigation";
export default function NotFound(){
    const pathname = usePathname();
    const productid = pathname.split('/')[2];
    const reviewid = pathname.split("/")[4];
    return (
        <html lang="en">
            <body>
                <p>Review {reviewid} for product {productid} could not be found.</p>
            </body>
        </html>
    )
}