import { useNode, useEditor } from "@craftjs/core";
import { GripVertical, Trash2, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useCallback } from "react";

export const CraftElementWrapper = ({ children }: { children: React.ReactNode }) => {
    const { actions: editorActions } = useEditor();

    const {
        connectors: { connect, drag },
        id,
        selected,
    } = useNode((node) => ({
        selected: node.events.selected,
    }));

    const [isHovered, setIsHovered] = useState(false);

    const setRef = useCallback(
        (ref: HTMLDivElement | null) => {
            if (ref) {
                connect(drag(ref));
            }
        },
        [connect, drag]
    );

    const showControls = selected || isHovered;

    return (
        <div
            ref={setRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "relative border border-transparent hover:border-blue-400 p-2 transition-colors duration-150",
                selected && "border-blue-500 bg-blue-50"
            )}
        >
            {showControls && (
                <div className="absolute top-1 right-1 flex space-x-1 z-10">
                    <button
                        className="bg-white border rounded p-1 hover:bg-gray-100 cursor-pointer"
                        onClick={() => editorActions.delete(id)}
                        title="Eliminar"
                    >
                        <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                    <button
                        className="bg-white border rounded p-1 hover:bg-gray-100 cursor-move"
                        title="Mover"
                    >
                        <GripVertical className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                        className="bg-white border rounded p-1 hover:bg-gray-100 cursor-pointer"
                        onClick={() => alert("Abrir panel de edición")}
                        title="Editar"
                    >
                        <Pencil className="w-4 h-4 text-gray-600" />
                    </button>
                </div>
            )}
            {children}
        </div>
    );
};