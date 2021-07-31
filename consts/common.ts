import axios from "axios";
import { Dimensions } from "react-native";

export const IS_DEV = __DEV__;

export const SENTRY_DSN = "";

const API_URL_PRODUCTION = "";

export let API_URL = API_URL_PRODUCTION;
axios.defaults.baseURL = API_URL;

export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;
