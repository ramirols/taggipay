import { useNode } from "@craftjs/core";

export function Container({ children }: { children: React.ReactNode }) {
    const {
        connectors: { connect, drag },
    } = useNode();

    return (
        <div ref={(ref) => connect(drag(ref))} className="min-h-[500px] p-8 bg-gray-100 border rounded">
            {children}
        </div>
    );
}

Container.craft = {
    displayName: "Container",
    rules: {
        canMoveIn: () => true,
    },
};
