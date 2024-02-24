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
        imageUrl: 'IMG_0730.jpeg',
        githubUrl: 'https://github.com/telucero/Artist_Rec'
    },
    {
        name: 'Project 2',
        imageUrl: 'AM_prior_1.jpeg',
        githubUrl: 'https://github.com/user/Ensemble_Analysis'
    },
    {
        name: 'Project 3',
        imageUrl: 'AM_prior_R1.jpeg',
        githubUrl: 'https://github.com/user/ETH_Analysis'
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
