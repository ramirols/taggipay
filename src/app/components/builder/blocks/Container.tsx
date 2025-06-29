import { useNode } from "@craftjs/core";
import { CraftElementWrapper } from "../CraftElementWrapper";

export function Container({ children }: { children: React.ReactNode }) {
    const {
        connectors: { connect, drag },
        custom,
    } = useNode((node) => ({
        custom: node.data.custom,
    }));

    return (
        <CraftElementWrapper>
            <div ref={(ref) => { if (ref) connect(drag(ref)); }} className={custom?.className}>
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
