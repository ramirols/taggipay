"use client";

import { useEditor } from "@craftjs/core";

export function SidebarPanel() {
    const { selected, nodes } = useEditor((state) => {
        const currentNodeId = state.events.selected;
        const currentNode = currentNodeId && state.nodes[currentNodeId];
        return {
            selected: currentNodeId,
            nodes: currentNode?.data?.props || {},
        };
    });

    if (!selected) {
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
                {JSON.stringify(nodes, null, 2)}
            </pre>
            {/* Aquí puedes renderizar un formulario según el tipo */}
        </div>
    );
}
