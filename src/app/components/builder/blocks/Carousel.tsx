import { useNode } from "@craftjs/core";
import { CraftElementWrapper } from "../CraftElementWrapper";
import Image from "next/image";
import { useCallback } from "react";

export function Carousel() {
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


    return (
        <CraftElementWrapper>
            <div ref={setRef} className="flex overflow-x-auto space-x-4 p-4">
                {[1, 2, 3].map((n) => (
                    <Image
                        key={n}
                        src={`https://placehold.co/300x200?text=Slide+${n}`}
                        alt={`Slide ${n}`}
                        width={300}
                        height={200}
                        className="rounded w-80 flex-shrink-0"
                    />
                ))}
            </div>
        </CraftElementWrapper>
    );
}

Carousel.craft = {
    props: {},
    displayName: "Carousel",
};
