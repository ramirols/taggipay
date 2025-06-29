import { Element, useNode } from "@craftjs/core";

export function Section({ children }: { children: React.ReactNode }) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref))} className="p-8 bg-gray-100 rounded mb-4">
      {children}
    </div>
  );
}
    
Section.craft = {
  displayName: "Section",
  props: {},
  rules: {
    canMoveIn: () => true,
  },
};
