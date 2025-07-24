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
    href: "/getting-started",
    items: [],
  },
  {
    label: "Explore",
    type: "dropdown",
    items: [
      { text: "Language", href: "/language" },
      { text: "Type-Checking", href: "/typeChecking" },
      { text: "Execution", href: "/execution" },
      { text: "Distribution", href: "/distribution" },
      { text: "Source Control", href: "/source-control" },
      { text: "Trace-Driven", href: "/traceDriven" },
      { text: "Editing", href: "/editing" },
      { text: "CLI", href: "/cli" },
      { text: "Backends", href: "/backends" },
      { text: "AI", href: "/ai" },
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
      { text: "Sharing Darklang", href: "/sharing" },
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
