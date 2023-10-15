// Types
import type Social from "$lib/types/social";

// Components
import Linkedin from "$lib/components/icon/linkedin.svelte";
import GitHub from "$lib/components/icon/github.svelte";

export const socials: Array<Social> = [
  {
    name: "GitHub",
    href: "https://github.com/williamjhughes",
    icon: GitHub
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/williamjhughes-dev/",
    icon: Linkedin
  }
];
