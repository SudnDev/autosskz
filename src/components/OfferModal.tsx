import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
    showModal: (content: ReactNode) => void;
    hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error("useModal must be used within ModalProvider");
    return context;
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);

    const showModal = (content: ReactNode) => setModalContent(content);
    const hideModal = () => setModalContent(null);

    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
            {children}
            {modalContent && (
                <div
                    className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-10000"
                    onClick={hideModal}
                >
                    <div className="bg-white p-6 rounded shadow-lg" onClick={e => e.stopPropagation()}>
                        {modalContent}
                        <button
                            onClick={hideModal}
                            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    );
};
