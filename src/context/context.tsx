import {createContext, type ReactNode, useCallback, useContext, useState} from "react";

type Con = { isOpen: boolean; setIsOpen: (value: boolean) => void };

type Con2 = Con | null;

export const Context2 = createContext<Con2>(null)

export const AppContextProvider = ({children}: { children: ReactNode }) => {
    const context = useCreateAppContext();
    // return <Context2.Provider value={context}>{children}</Context.Provider>;
    return (
        <Context2.Provider value={context}>
            {children}
        </Context2.Provider>
    )
};

export const useCreateAppContext = function () {
    const [isOpen, editIsOpen] = useState<boolean>(false);

    const setIsOpen = useCallback((value: boolean) => {
        editIsOpen(value);
    }, []);

    return {
        isOpen,
        setIsOpen,
    };
}

// export function closeNavBar() {
//     const context = useCreateAppContext();
//     if (context !== null) {
//         context.isOpen && context.setIsOpen(false);
//     }
// }

export function useAppContext() {
    const context = useContext(Context2);
    if (!context) throw new Error('Use app context within provider!');
    return context;
}