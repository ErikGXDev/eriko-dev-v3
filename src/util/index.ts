import { slug } from "github-slugger";
import type { BlogFrontmatter } from "../content/_schemas";

export const colors = {
  neutral: "neutral-600",
  amber: "amber-600",
  orange: "orange-600",
  pink: "pink-600",
  fuchsia: "fuchsia-600",
  purple: "purple-600",
};

export interface Socials {
  link: string;
  icon: string;
  title: string;
  description: string;
}

export const socials: Socials[] = [
  {
    link: "https://github.com/ErikoXDev",
    icon: "fe:github",
    title: "GitHub",
    description: "GitHub is where I keep most of my open-source projects!",
  },
  {
    link: "https://twitter.com/ErikoXDev",
    icon: "fe:twitter",
    title: "Twitter",
    description:
      "I usally don't use Twitter often, but I made one just in case.",
  },
  {
    link: "https://discordapp.com/users/610788461028573194",
    icon: "fa-brands:discord",
    title: "Discord",
    description:
      "You can pretty much always reach me on Discord. Username: erikox",
  },
  {
    link: "mailto:contact@eriko.dev",
    icon: "fe:mail",
    title: "E-Mail",
    description:
      "If you really need to email me something, do it at contact@eriko.dev!",
  },
];

export function slugify(post: BlogFrontmatter) {
  return post.postSlug ? slug(post.postSlug) : slug(post.title);
}

export function getPageNumbers(numberOfPosts: number) {
  const numberOfPages = numberOfPosts / Number(postsPerPage);

  let pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i];
  }

  return pageNumbers;
}

export const postsPerPage = 3;
