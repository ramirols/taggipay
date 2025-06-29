"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/lib/supabase/client";
import { CraftElementWrapper } from "../CraftElementWrapper";
import Image from "next/image";

export function Hero() {
    return (
        <CraftElementWrapper>
            <div className="p-10 bg-primary text-white text-center rounded">
                <h1 className="text-3xl font-bold">Soy un Hero Section</h1>
            </div>
        </CraftElementWrapper>
    );
}

type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    image_url: string | null;
};

export function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);

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
            <div className="p-6 border rounded">
                <h2 className="text-xl mb-4">Lista de Productos</h2>
                <ul className="space-y-4">
                    {products.map((product) => (
                        <li key={product.id} className="flex items-center gap-4">
                            {product.image_url && (
                                <div className="w-20 h-20 relative">
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