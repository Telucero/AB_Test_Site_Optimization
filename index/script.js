// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Display only one slide at a time
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var projectDescription = document.getElementById('project-description');

// Function to update project description based on the active slide
function updateProjectDescription(activeSlide) {
    var projects = [
        {
            name: 'Project 1',
            description: 'Description for Project 1 goes here...',
            imageUrl: 'images/IMG_0730.jpeg',
            githubUrl: 'https://github.com/telucero/Artist_Rec'
        },
        {
            name: 'Project 2',
            description: 'Description for Project 2 goes here...',
            imageUrl: 'images/AM_prior_1.jpeg',
            githubUrl: 'https://github.com/user/Ensemble_Analysis'
        },
        {
            name: 'Project 3',
            description: 'Description for Project 3 goes here...',
            imageUrl: 'images/AM_prior_R1.jpeg',
            githubUrl: 'https://github.com/user/ETH_Analysis'
        }
        // Add more projects as needed
    ];

    var projectIndex = activeSlide - 1; // Adjust index to match array (Swiper's slide index is zero-based)
    
    // Update project description
    if (projectIndex >= 0 && projectIndex < projects.length) {
        projectDescription.textContent = projects[projectIndex].name + ': ' + projects[projectIndex].description;
    }
}

// Listen for slide change events and update the project description accordingly
swiper.on('slideChange', function () {
    var activeSlide = swiper.realIndex + 1; // Swiper's slide index is zero-based
    updateProjectDescription(activeSlide);
});

// Initially update project description for the first slide
updateProjectDescription(1);

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
