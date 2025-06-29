import { useNode } from "@craftjs/core";
import { CraftElementWrapper } from "../CraftElementWrapper";
import Image from "next/image";

export function Carousel() {
    const {
        connectors: { connect, drag },
    } = useNode();

    return (
        <CraftElementWrapper>
            <div ref={(ref) => { if (ref) connect(drag(ref)); }} className="flex overflow-x-auto space-x-4 p-4">
                {[1, 2, 3].map((n) => (
                    <Image
                        key={n}
                        src={`https://placehold.co/300x200?text=Slide+${n}`}
                        alt={`Slide ${n}`}
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
