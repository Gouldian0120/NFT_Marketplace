import moment from "moment";
import { localeChanged } from "vee-validate";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, LOCAL_STORE } from "./Constants";
import router from "../router";

export const getToken = () => {
  return localStorage.getItem(LOCAL_STORE.TOKEN);
};

export const saveToken = token => {
  localStorage.setItem(LOCAL_STORE.TOKEN, token);
};

export const getDraft = () => {
  return localStorage.getItem(LOCAL_STORE.EDITOR_DRAFT);
};

export const saveDraft = draft => {
  localStorage.setItem(LOCAL_STORE.EDITOR_DRAFT, draft);
};

// TODO: clear the store after login
export const logout = (url = "/login") => {
  localStorage.removeItem(LOCAL_STORE.TOKEN);
  localStorage.removeItem(LOCAL_STORE.EDITOR_DRAFT);
  router.push(url);
  // window.location.reload();
};

export const setCurrentLanguage = lang => {
  // const { i18n } = require("../plugins/vuetify");
  localStorage.setItem(LOCAL_STORE.LANG, lang);
  // i18n.locale = lang;
  moment.locale(lang);
  localeChanged();
};

export const getCurrentLanguage = () => {
  let currentLanguage = localStorage.getItem(LOCAL_STORE.LANG);
  // get default language from browser
  if (!currentLanguage) {
    currentLanguage = navigator.language.split(/-|_/)?.[0];
  }
  // check if language is supported
  if (SUPPORTED_LANGUAGES.indexOf(currentLanguage) < 0) {
    currentLanguage = DEFAULT_LANGUAGE;
  }
  return currentLanguage;
};

const getBrowserLocales = (options = {}) => {
  const defaultOptions = {
    languageCodeOnly: false,
  };

  const opt = {
    ...defaultOptions,
    ...options,
  };

  const browserLocales =
    navigator.languages === undefined
      ? [navigator.language]
      : navigator.languages;

  if (!browserLocales) {
    return undefined;
  }

  return browserLocales.map(locale => {
    const trimmedLocale = locale.trim();

    return opt.languageCodeOnly ? trimmedLocale.split(/-|_/)[0] : trimmedLocale;
  });
};
