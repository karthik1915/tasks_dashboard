import { TaskProps } from "../tasks";

const tasks: TaskProps[] = [
  {
    id: 1,
    title: "Redesign Homepage",
    priority: "low",
    description: "Update the design of the homepage to improve user experience",
    keywords: ["Design", "UI/UX", "Homepage"],
    currState: "todo",
    date: new Date(),
  },
  {
    id: 2,
    title: "Implement User Authentication",
    priority: "medium",
    currState: "progress",
    description: "Add user authentication functionality using OAuth 2.0",
    keywords: ["Authentication", "Security", "OAuth"],
    date: new Date(),
  },
  {
    id: 3,
    title: "Optimize Backend Performance",
    priority: "high",
    currState: "progress",
    description:
      "Identify and resolve performance bottlenecks in the backend services",
    keywords: ["Performance", "Backend", "Optimization"],
    date: new Date(),
  },
  {
    id: 4,
    title: "Write Test Cases",
    priority: "medium",
    currState: "done",
    description:
      "Develop test cases to ensure the reliability and stability of the application",
    keywords: ["Testing", "Quality Assurance", "Test Cases"],
    date: new Date(),
  },
];

export default tasks;
