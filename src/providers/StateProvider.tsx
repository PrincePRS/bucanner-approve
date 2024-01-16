import Cookies from "js-cookie";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { LANGUAGE_TYPES, StateContextType } from "../constants/context";

export const StateContext = createContext<StateContextType>(
  {} as StateContextType
);

export const StateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const LANGUAGE = "language";
  const [language, setLang] = useState<string>(LANGUAGE_TYPES.ENGLISH);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isRevealTooltip, setIsRevealTooltip] = useState(false);

  useEffect(() => {
    const lang = Cookies.get(LANGUAGE);
    setLanguage(lang ?? LANGUAGE_TYPES.ENGLISH);
  }, []);

  const setLanguage = (lang: string) => {
    setLang(lang ?? LANGUAGE_TYPES.ENGLISH);
    Cookies.set(LANGUAGE, lang ?? LANGUAGE_TYPES.ENGLISH);
  };

  const contextValue: StateContextType = {
    language,
    showTooltip,
    isRevealTooltip,
    setLanguage,
    setShowTooltip,
    setIsRevealTooltip,
  };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
