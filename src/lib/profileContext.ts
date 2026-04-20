import { aiAssistantKnowledge, experience, projects } from "@/data/portfolioData";

export function buildProfileContext() {
  const experienceSummary = experience
    .map(
      (item) =>
        `${item.company} (${item.role}): ${item.bullets
          .slice(0, 2)
          .join(" ")} Tech: ${item.tech.join(", ")}.`,
    )
    .join("\n");

  const projectSummary = projects
    .map(
      (project) =>
        `${project.title}: ${project.description} Highlights: ${project.highlights.join(" ")} Tech: ${project.tech.join(", ")}.`,
    )
    .join("\n");

  return [
    `Name: ${aiAssistantKnowledge.name}`,
    `Title: ${aiAssistantKnowledge.title}`,
    `Elevator Pitch: ${aiAssistantKnowledge.elevatorPitch}`,
    `Strengths: ${aiAssistantKnowledge.strengths.join(", ")}`,
    `Signatures: ${aiAssistantKnowledge.signatures.join(", ")}`,
    `Preferred Roles: ${aiAssistantKnowledge.preferredRoles.join(", ")}`,
    "Work Experience:",
    experienceSummary,
    "Projects:",
    projectSummary,
  ].join("\n");
}
