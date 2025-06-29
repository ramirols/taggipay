"use client";

import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/app/lib/supabase/client";
import { CraftElementWrapper } from "../CraftElementWrapper";
import Image from "next/image";
import { useNode } from "@craftjs/core";

interface Product {
    id: string;
    name: string;
    description: string;
    image_url?: string;
    price: number;
}

export function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);

    const {
        connectors: { connect, drag },
    } = useNode();

    const setRef = useCallback(
        (ref: HTMLDivElement | null) => {
            if (ref) {
                connect(drag(ref));
            }
        },
        [connect, drag]
    );

    useEffect(() => {
        const fetchProducts = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            if (user) {
                const { data, error } = await supabase
                    .from("products")
                    .select("*")
                    .eq("user_id", user.id)
                    .eq("is_active", true);

                if (!error && data) {
                    setProducts(data as Product[]);
                }
            }
        };

        fetchProducts();
    }, []);

    return (
        <CraftElementWrapper>
            <div ref={setRef} className="p-6 border rounded">
                <h2 className="text-xl mb-4">Lista de Productos</h2>
                <ul className="space-y-4">
                    {products.map((product) => (
                        <li key={product.id} className="flex items-center gap-4">
                            {product.image_url && (
                                <div className="w-16 h-16 relative flex-shrink-0">
                                    <Image
                                        src={product.image_url}
                                        alt={product.name}
                                        fill
                                        className="object-cover rounded"
                                    />
                                </div>
                            )}
                            <div>
                                <h3 className="font-semibold">{product.name}</h3>
                                <p className="text-sm text-gray-600">{product.description}</p>
                                <p className="font-medium">${product.price}</p>
                            </div>
                        </li>
                    ))}
                    {products.length === 0 && (
                        <li className="text-gray-500">No hay productos disponibles</li>
                    )}
                </ul>
            </div>
        </CraftElementWrapper>
    );
}

ProductList.craft = {
    props: {},
    displayName: "Product List",
};