"use client";

type Project = {
  id: number;
  name: string;
  status: "Active" | "Completed" | "In Progress";
  updated: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "E-commerce Platform",
    status: "Active",
    updated: "2 days ago",
  },
  {
    id: 2,
    name: "Portfolio Website",
    status: "Completed",
    updated: "1 week ago",
  },
  {
    id: 3,
    name: "Mobile App Design",
    status: "In Progress",
    updated: "3 days ago",
  },
];

export default function MyProjects() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Projects</h1>
      {/* <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                <p className="text-sm text-gray-500 mt-1">Updated {project.updated}</p>
              </div>
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  project.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : project.status === "Completed"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
