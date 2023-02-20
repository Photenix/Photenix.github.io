import { useContext } from 'react';
import { languageOptions } from '../languages';
import LanguageContext from '../container/Language';

function LanguageSelector() {
    const { userLanguage, userLanguageChange } : any = useContext(LanguageContext);
    
    // set selected language by calling context method  
    const handleLanguageChange = ( e : any ) => userLanguageChange(e.target.value)
    return (
        <header className='language-select'>
            {
                Object.entries(languageOptions).map(
                    ([id, name]) : any => {
                        const label : any = name
                        return(
                            <button value={id} onClick={handleLanguageChange}>
                                {label}
                            </button>
                        )
                    }
                )
            }    
        </header>
    );
};

export default LanguageSelector