import { Metadata } from "next";

type Props = {
    params: Promise<{ productid: string }>;
}

export const generateMetadata = async ({
    params,
} : Props) : Promise<Metadata> => {
    const id = (await params).productid;
    const title = await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`iPhone ${id}`);
        })
    })
    return {
        title: `Product ${title}`,
    };
};

export default async function ProductDetails({
    params,
} : Props
) {
    const { productid } = await params;
    return (<h1> Product {productid} Details</h1>);
}