import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);
  const body = document.querySelector("body");
  useEffect(() => {
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode, body.classList]);
  return [darkMode, setDarkMode];
};
