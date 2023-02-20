import { createContext } from "react";
import { languageOptions, dictionaryList } from "../languages";

const LanguageContext = createContext({
    userLanguage: "en",
    dictionary: dictionaryList.en
})

export default LanguageContext
