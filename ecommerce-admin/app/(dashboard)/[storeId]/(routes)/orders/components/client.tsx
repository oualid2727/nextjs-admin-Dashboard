"use client";


import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";


import { useParams, useRouter } from "next/navigation";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { useEffect } from "react";


interface OrderClientProps {
    data: OrderColumn[]
}


export const OrderClient: React.FC<OrderClientProps> = ({data}) => {

        const router = useRouter();
        const params = useParams();

        useEffect(() => {
            router.refresh();
        }, [])

    return (
        <>

                <Heading
                title={`Orders (${data.length})`}
                description  = "Manage orders for your store"
                />

            <Separator/>
            <DataTable searchKey="products" columns={columns} data ={data}/>
        </>
    )
}

