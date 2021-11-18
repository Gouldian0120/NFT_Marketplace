export const API_URL = process.env.VUE_APP_API_URL;
export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["vi", "en"];
// The following components is not required to confirm email before using it
export const NO_CONFIRM_EMAIL_ROUTES = ["ConfirmEmail"];

// Color user
export const COLORS_USER = [
  "#B0EDBF",
  "#EFCECA",
  "#BFEFEC",
  "#EFD4AC",
  "#D1F4AE",
];
// Local field
export const LOCAL_STORE = {
  TOKEN: "token",
  LANG: "lang",
  EDITOR_DRAFT: "editorDraft",
};

// Asset type field
export const ASSET_TYPE = {
  ETH: 0,
  ERC20: 1,
  ERC1155: 2,
  ERC721: 3,
  ERC721Deprecated: 4,
};
export const ONE_ETHER = 1000000000000000000;
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
