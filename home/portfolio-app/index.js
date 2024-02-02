// Define your projects data
const projects = [
    { name: "Project 1", description: "Description of Project 1" },
    { name: "Project 2", description: "Description of Project 2" },
    { name: "Project 3", description: "Description of Project 3" }
];

// Function to dynamically populate projects section
function populateProjects() {
    const projectsList = document.getElementById("projects-list");

    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");

        const projectName = document.createElement("h3");
        projectName.textContent = project.name;

        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;

        projectElement.appendChild(projectName);
        projectElement.appendChild(projectDescription);
        projectsList.appendChild(projectElement);
    });
}

// Call the populateProjects function when the page loads
document.addEventListener("DOMContentLoaded", populateProjects);
