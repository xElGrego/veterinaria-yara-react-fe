import { FC } from "react";

export interface IPaginationButtonsProps {
    prevPageTable: () => void;
    nextPageTable: () => void;
    firstPageTable: () => void;
    lastPageTable: () => void;
    OnLockLast: boolean;
    OnLockFirst: boolean;
}

export const PaginationButtons: FC<IPaginationButtonsProps> = ({
    nextPageTable,
    prevPageTable,
    firstPageTable,
    lastPageTable,
    OnLockLast,
    OnLockFirst,
}: IPaginationButtonsProps) => {
    return (
        <div>
            <div>
                <nav
                    className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                    aria-label="Pagination"
                >
                    {!OnLockFirst ? (
                        <>
                            <button
                                onClick={firstPageTable}
                                type="button"
                                className="relative inline-flex items-center dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600  px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50"
                            >
                                <span className="sr-only">First</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                onClick={prevPageTable}
                                type="button"
                                className="bg-white border-gray-300 text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600  relative inline-flex items-center px-2 py-2 border text-sm font-medium"
                            >
                                <span className="sr-only">Previous</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5 "
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                type="button"
                                disabled
                                className="relative inline-flex items-center dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50"
                            >
                                <span className="sr-only">First</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                type="button"
                                disabled
                                className="bg-white border-gray-300 text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600  relative inline-flex items-center px-2 py-2 border text-sm font-medium"
                            >
                                <span className="sr-only">Previous</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </>
                    )}

                    {!OnLockLast ? (
                        <>
                            <button
                                onClick={nextPageTable}
                                type="button"
                                className="bg-white border-gray-300 text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600  relative inline-flex items-center px-2 py-2 border text-sm font-medium"
                            >
                                <span className="sr-only">Next</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                onClick={lastPageTable}
                                type="button"
                                className="bg-white border-gray-300 text-gray-400 hover:bg-gray-50  dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600  relative inline-flex items-center px-2 py-2 border text-sm font-medium"
                            >
                                <span className="sr-only">Last</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                type="button"
                                disabled
                                className="bg-white border-gray-300 text-gray-400 hover:bg-gray-50  dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600  relative inline-flex items-center px-2 py-2 border text-sm font-medium"
                            >
                                <span className="sr-only">Next</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="relative inline-flex items-center px-2 py-2 rounded-r-md border dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600  border-gray-300 bg-white text-sm font-medium text-gray-400 hover:bg-gray-50"
                                disabled
                            >
                                <span className="sr-only">Last</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </>
                    )}
                </nav>
            </div>
        </div>
    );
};


