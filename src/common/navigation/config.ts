export interface NavigationItem {
  text: string;
  href: string;
  target?: string;
}

export interface NavigationSection {
  label: string;
  items: NavigationItem[];
  type: "dropdown" | "link";
  href?: string;
  target?: string;
}

export const navigationConfig: NavigationSection[] = [
  {
    label: "Get Started",
    type: "link",
    href: "/gettingStarted",
    items: [],
  },
  {
    label: "Explore",
    type: "dropdown",
    items: [
      { text: "Language", href: "/language", target: "_blank" },
      { text: "Type-Checking", href: "/typeChecking", target: "_blank" },
      { text: "Execution", href: "/execution", target: "_blank" },
      { text: "Distribution", href: "/distribution", target: "_blank" },
      { text: "Trace-Driven", href: "/traceDriven", target: "_blank" },
      { text: "Editing", href: "/editing", target: "_blank" },
      { text: "CLI", href: "/cli", target: "_blank" },
      { text: "Backends", href: "/backends", target: "_blank" },
      { text: "AI", href: "/ai", target: "_blank" },
    ],
  },
  {
    label: "Docs",
    type: "link",
    href: "https://docs.darklang.com",
    target: "_blank",
    items: [],
  },
  {
    label: "Our Cloud",
    type: "link",
    href: "/our-cloud",
    items: [],
  },
  {
    label: "Company",
    type: "dropdown",
    items: [
      { text: "About", href: "/company" },
      { text: "Sustainability", href: "/company/sustainability" },
      { text: "Blog", href: "https://blog.darklang.com/", target: "_blank" },
    ],
  },
];

export const classicNavigationConfig = {
  label: "Darklang Classic",
  items: [
    { text: "About", href: "/classic" },
    { text: "Log in", href: "https://login.darklang.com", target: "_blank" },
  ],
};

export const socialLinks = [
  {
    name: "Discord",
    href: "https://darklang.com/discord",
    icon: "discord",
  },
  {
    name: "GitHub",
    href: "https://github.com/darklang/dark",
    icon: "github",
  },
];
