import { useContext } from "react";
import LanguageContext from "../container/Language";

function Text( { tid } : any ) { 
    const languageContext = useContext(LanguageContext);
    return languageContext.dictionary[tid] || tid;
};

export default Text