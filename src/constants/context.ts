export enum LANGUAGE_TYPES {
  ENGLISH = "en",
  CHINESE = "zh",
}

export interface StateContextType {
  language: string;
  showTooltip: boolean;
  isRevealTooltip: boolean;
  setShowTooltip: (value: boolean) => void;
  setIsRevealTooltip: (value: boolean) => void;
  setLanguage: (lang: string) => void;
}
