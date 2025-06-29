import { useNode } from "@craftjs/core";
import { CraftElementWrapper } from "../CraftElementWrapper";
import { useCallback } from "react";

export function Heading({ text = "Título de ejemplo" }) {
  const {
    connectors: { connect, drag },
  } = useNode();

  const setRef = useCallback(
    (ref: HTMLHeadingElement | null) => {
      if (ref) {
        connect(drag(ref));
      }
    },
    [connect, drag]
  );

  return (
    <CraftElementWrapper>
      <h1
        ref={setRef}
        className="text-3xl font-bold my-2"
      >
        {text}
      </h1>
    </CraftElementWrapper>
  );
}

Heading.craft = {
  props: {
    text: "Título de ejemplo",
  },
  displayName: "Heading",
};