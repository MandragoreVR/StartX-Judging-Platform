import { useContext, createContext, useState, ReactNode } from "react";
import { Interview } from "../data/types";

const SelectedInterviewContext = createContext<{
    selectedInterview: Interview | null;
    setSelectedInterview: (arg0: Interview) => void;
}>({
    selectedInterview: null,
    setSelectedInterview: () => {}
});

const SelectedInterviewProvider = ({ children } : { children : ReactNode }) : JSX.Element => {
    const [selectedInterview, setSelectedInterview] = useState<Interview|null>(null);
    return (
        <SelectedInterviewContext.Provider value = {{
            selectedInterview: selectedInterview,
            setSelectedInterview: setSelectedInterview
        }}>
           {children}
        </SelectedInterviewContext.Provider>
    )
}

export default SelectedInterviewProvider;

export const useSelectedInterview = () => {
    return useContext(SelectedInterviewContext);
}