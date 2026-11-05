import type { Project } from "@/lib/projects";
import { DetailSection } from "@/components/DetailSection";
import { ReverseEngineeringDetails } from "@/components/ReverseEngineeringDetails";
import { Troubleshooting } from "@/components/Troubleshooting";

export function ProjectDetails({ project }: { project: Project }) {
  if (project.caseStudy === "2048-reverse-engineering") {
    return <ReverseEngineeringDetails />;
  }

  const { contributions, learnings = [], troubleshooting } = project;

  if (!contributions.length && !learnings.length && !troubleshooting.length) {
    return null;
  }

  return (
    <div className="mt-20 space-y-24">
      {contributions.length > 0 && (
        <DetailSection
          id="contribution-heading"
          label="What I did"
          title={
            project.category === "subproject"
              ? "주요 기능 및 구현"
              : "주요 기여"
          }
        >
          <DetailList items={contributions} />
        </DetailSection>
      )}

      {learnings.length > 0 && (
        <DetailSection
          id="learnings-heading"
          label="What I learned"
          title="배운 점"
        >
          <DetailList items={learnings} />
        </DetailSection>
      )}

      {troubleshooting.length > 0 && (
        <DetailSection
          id="troubleshooting-heading"
          label="Troubleshooting"
          title="문제 해결 과정"
        >
          <Troubleshooting cases={troubleshooting} />
        </DetailSection>
      )}
    </div>
  );
}

function DetailList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-8 list-disc space-y-4 pl-5 leading-7 text-zinc-700 marker:text-zinc-500 dark:text-zinc-300 dark:marker:text-zinc-400">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
