import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = props => {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const [isEnglish, setIsEnglish] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleChangeLanguage = () => {
        setIsEnglish(!isEnglish);
    }
    const handleMenuOpen = () => {
        if (!isMenuOpen){
            setScrollPosition(window.pageYOffset);
        }
        window.scrollTo(0, scrollPosition);
        setIsMenuOpen(!isMenuOpen);
    }
    const handleThemeChange = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    const storeObject = {
        isDarkTheme,
        isEnglish,
        isMenuOpen,
        handleChangeLanguage,
        handleMenuOpen,
        handleThemeChange,
    }

    return(
      <AppContext.Provider value={storeObject}>
          {props.children}
      </AppContext.Provider>
    );
}

export default AppProvider;