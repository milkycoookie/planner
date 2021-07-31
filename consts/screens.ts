const SCREENS = {
  HOME: "HOME",
  AUTH: "AUTH",
};

type TScreen = keyof typeof SCREENS;

export { SCREENS, TScreen };
