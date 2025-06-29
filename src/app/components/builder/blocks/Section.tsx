import { useNode } from "@craftjs/core";
import { CraftElementWrapper } from "../CraftElementWrapper";
import { useCallback } from "react";

export function Section({ children }: { children: React.ReactNode }) {
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
      <div
        ref={setRef}
        className="p-8 bg-gray-100 rounded mb-4"
      >
        {children}
      </div>
    </CraftElementWrapper>
  );
}

Section.craft = {
  displayName: "Section",
  props: {},
  rules: {
    canMoveIn: () => true,
  },
};