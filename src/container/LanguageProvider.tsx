import { useState } from "react";
import LanguageContext from "./Language";
import { dictionaryList } from "../languages";

function LanguageProvider({ children } : any ) {
    const defaultLanguage = localStorage.getItem('rcml-lang');
    const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');

    const provider = {    
        userLanguage,
        dictionary: dictionaryList[userLanguage],
        userLanguageChange: ( selected : any ) => {
            const newUserLanguage = selected || 'en'
            setUserLanguage(newUserLanguage);
            localStorage.setItem('rcml-lang', newUserLanguage);
        }
    };
    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider