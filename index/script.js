// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Display only one slide at a time
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


var contactInfo = document.getElementById('contact');
var projectDescription = document.getElementById('project-description');

// Function to update project description based on the active slide
function updateProjectDescription(activeSlide) {
    if (activeSlide === 1) { // Slide 1
        projectDescription.textContent = "Project 1: Description goes here...";
    } else if (activeSlide === 2) { // Slide 2
        projectDescription.textContent = "Project 2: Description goes here...";
    } else if (activeSlide === 3) { // Slide 3
        projectDescription.textContent = "Project 3: Description goes here...";
    }
    // Add more conditions as needed for additional slides
}

// Assuming you have a variable "activeSlide" that tracks the active slide index
var activeSlide = 1; // Example: Start with the first slide as active

// Call the function initially to set the project description based on the active slide
updateProjectDescription(activeSlide);

// Listen for slide change events and update the project description accordingly
swiper.on('slideChange', function () {
    activeSlide = swiper.realIndex + 1; // Swiper's slide index is zero-based
    updateProjectDescription(activeSlide);
});


// Projects data
var projects = [
    {
        name: 'Project 1',
        imageUrl: 'images/IMG_0730.jpeg',
        githubUrl: 'https://github.com/telucero/Artist_Rec'
    },
    {
        name: 'Project 2',
        imageUrl: 'images/AM_prior_1.jpeg',
        githubUrl: 'https://github.com/user/Ensemble_Analysis'
    },
    {
        name: 'Project 3',
        imageUrl: 'images/AM_prior_R1.jpeg',
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
