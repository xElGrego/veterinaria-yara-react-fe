import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUsuariosMascotas } from "./hooks/useUsuariosMascotas";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { IMascota } from "../../../../domain/Mascotas/IMascota";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useOrdenartMascotas } from "../../../../application/Mascotas/ordenarMascota";
import { IOrderMascota } from "../../../../domain/Mascotas/OrderMascotas";
import { Button } from "../../../../shared/Components/Buttons/Button";

export const UsuariosMascotasIndex: FC = () => {
  const navigate = useNavigate();
  const guid = uuidv4();
  const location = useParams();

  const { mascotas, reorderMascotas } = useUsuariosMascotas(location.id!);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    reorderMascotas(result.source.index, result.destination.index);
  };

  return (
    <section className="mx-2 rounded-lg px-4 py-2 mt-2 w-full">
      <div className="lg:flex md:flex justify-between items-center">
        <h2 className="font-semibold text-2xl dark:text-black">
          Mascotas de Usuarios
        </h2>
      </div>
      <div className=" border-b my-2"></div>
      <div className="my-2 ">
        <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden rounded-lg">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={guid}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {mascotas.map((mascota: IMascota, index: number) => (
                    <Draggable
                      key={mascota.idMascota}
                      draggableId={mascota.idMascota}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="px-4 py-5 sm:px-6 flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-2 text-gray-600 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16m-7 6h7"
                            />
                          </svg>
                          <h2 className="text-lg font-semibold text-gray-800">
                            {mascota.nombre}
                          </h2>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </section>
  );
};
