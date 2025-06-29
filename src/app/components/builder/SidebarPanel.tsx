"use client";

import { useEditor } from "@craftjs/core";

export function SidebarPanel() {
    const { selectedId, props } = useEditor((state) => {
        const selected = Array.from(state.events.selected)[0];
        const node = selected && typeof state.nodes[selected] === "object" ? state.nodes[selected] : null;

        return {
            selectedId: selected,
            props: node?.data?.props || {},
        };
    });

    if (!selectedId) {
        return (
            <div className="p-4 text-gray-500 text-sm">
                Selecciona un componente para editar
            </div>
        );
    }

    return (
        <div className="p-4 border-l w-[300px] bg-white">
            <h3 className="text-lg font-bold mb-4">Editar componente</h3>
            <pre className="text-xs bg-gray-100 p-2 rounded">
                {JSON.stringify(props, null, 2)}
            </pre>
        </div>
    );
}