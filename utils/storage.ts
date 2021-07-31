import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEYS = {
  ACCESS_TOKEN: "token",
  REFRESH_TOKEN: "refresh_token",
  REFRESH_TOKEN_EXP: "refresh_token_exp",
  SELECTED_THEME: "SELECTED_THEME",
};

type TStorageKeys = keyof typeof STORAGE_KEYS;

const getItem = async (key: TStorageKeys) => AsyncStorage.getItem(key);
const setItem = async (key: TStorageKeys, val: string) => AsyncStorage.setItem(key, val);
const removeItem = async (key: TStorageKeys) => AsyncStorage.removeItem(key);

const Storage = { ...AsyncStorage, getItem, setItem, removeItem, STORAGE_KEYS };

export default Storage;
