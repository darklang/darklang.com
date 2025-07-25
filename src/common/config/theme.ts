export interface ThemeConfig {
  backgroundColor: string;
  textColor: string;
  isDark: boolean;
}

const darkPages = new Set([
  "classic",
  "cli",
  "editing",
  "packages",
  "our-cloud",
]);

export const shouldUseDarkTheme = (pageName: string): boolean => {
  if (darkPages.has(pageName)) return true;

  for (const darkPage of darkPages) {
    if (pageName.startsWith(darkPage)) return true;
  }

  return false;
};

export const getPageTheme = (pageName: string): ThemeConfig => {
  const isDark = shouldUseDarkTheme(pageName);

  return {
    backgroundColor: isDark ? "bg-dark" : "bg-white",
    textColor: isDark ? "text-white" : "",
    isDark,
  };
};

export const getLogoSrc = (isDark: boolean): string => {
  return isDark ? "/assets/darklang-logo-dbg.png" : "/assets/darklang-logo.png";
};

export const getGithubLogoSrc = (isDark: boolean): string => {
  return isDark ? "/assets/github-logo-white.png" : "/assets/github-logo.png";
};
