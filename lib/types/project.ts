export type ProjectCategory = "project" | "subproject";

export type ProjectTroubleshooting = {
  readonly title: string;
  readonly problem: string;
  readonly solution: string;
  readonly result: string;
};

export type Project = {
  readonly slug: string;
  readonly category: ProjectCategory;
  readonly featured?: boolean;
  readonly title: string;
  readonly englishTitle: string;
  readonly summary: string;
  readonly description: string;
  readonly year: string;
  readonly status: string;
  readonly technologies: readonly string[];
  readonly image: string | null;
  readonly imageAlt: string;
  readonly imageAspectRatio?: number;
  readonly caseStudy?: "2048-reverse-engineering";
  readonly contributions: readonly string[];
  readonly learnings?: readonly string[];
  readonly troubleshooting: readonly ProjectTroubleshooting[];
};
