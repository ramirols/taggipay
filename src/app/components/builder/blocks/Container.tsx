import { useNode } from "@craftjs/core";
import { CraftElementWrapper } from "../CraftElementWrapper";
import { useCallback } from "react";

export function Container({ children }: { children: React.ReactNode }) {
    const {
        connectors: { connect, drag },
        custom,
    } = useNode((node) => ({
        custom: node.data.custom,
    }));

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
            <div ref={setRef} className={custom?.className}>
                {children}
            </div>
        </CraftElementWrapper>
    );
}

Container.craft = {
    displayName: "Container",
    rules: {
        canMoveIn: () => true,
    },
};
