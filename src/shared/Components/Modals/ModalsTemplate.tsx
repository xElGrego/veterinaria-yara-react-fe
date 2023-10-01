interface ModalTemplateProps {
  title?: string;
  legend?: JSX.Element;
  children: any;
  id: string;
  info: string;
  botones?: string;
}

const ModalTemplate = (props: ModalTemplateProps) => {
  return (
    <div>
      <div
        data-te-modal-init
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-80 z-[1055]"
        id={props.id}
        tabIndex={-1}
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none  relative flex min-h-[calc(100%-1rem)]  translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out mx-4 min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] lg:w-[800px] "
        >
          <div className="pointer-events-auto relative flex w-full flex-col rounded-lg border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-gray-900">
            {props.title ? (
              <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <h5
                  className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                  id="exampleModalScrollableLabel"
                >
                  {props.title}
                </h5>
              </div>
            ) : (
              <></>
            )}

            <div>{props.children}</div>
            {props.botones === "true" ? (
              <div className="text-right mx-2 my-2 text-xs">
                <div className="space-x-2">
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-centered="true"
                    data-te-modal-dismiss
                    aria-label="Close"
                    className="border p-2 px-4 bg-transparent rounded-md text-black border-gray-400"
                  >
                    Cancelar
                  </button>
                  <button
                    className="border p-2 px-4 rounded-md text-white bg-blue-700"
                    data-te-ripple-init
                    data-te-ripple-centered="true"
                    data-te-modal-dismiss
                    aria-label="Close"
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTemplate;
