// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Projects data
var projects = [
    {
        name: 'Project 1',
        imageUrl: 'IMG_7030.jpeg',
        githubUrl: 'https://github.com/user/project1'
    },
    {
        name: 'Project 2',
        imageUrl: 'project2.jpg',
        githubUrl: 'https://github.com/user/project2'
    },
    {
        name: 'Project 3',
        imageUrl: 'project3.jpg',
        githubUrl: 'https://github.com/user/project3'
    }
    // Add more projects as needed
];

// Generate HTML for projects
var projectsHtml = '';
projects.forEach(function(project) {
    projectsHtml += `
        <div class="swiper-slide">
            <a href="${project.githubUrl}" target="_blank">
                <img src="${project.imageUrl}" alt="${project.name}">
            </a>
        </div>
    `;
});

// Append projects HTML to the swiper wrapper
document.querySelector('.swiper-wrapper').innerHTML = projectsHtml;
