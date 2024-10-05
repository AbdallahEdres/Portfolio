document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const project = urlParams.get('project');

    if (project) {
        const projectInfo = document.getElementById('project-info');

        // Define project details and screenshots
        if (project === '1') {
            projectInfo.innerHTML = `
                <h3>Project 1</h3>
                <p>This is the detailed description of Project 1. It includes its features, the technologies used, and how it helps users. The app is designed to be intuitive and scalable, using Swift and UIKit for optimal performance.</p>
                <div class="screenshots">
                    <img src="images/project1_1.png" alt="Project 1 Screenshot 1">
                    <img src="images/project1_2.png" alt="Project 1 Screenshot 2">
                </div>
            `;
        } else if (project === '2') {
            projectInfo.innerHTML = `
                <h3>Project 2</h3>
                <p>This is the detailed description of Project 2. It focuses on providing real-time data visualization and seamless user experience. Built with SwiftUI, the app incorporates Combine and MVVM for a responsive design.</p>
                <div class="screenshots">
                    <img src="images/project2_1.png" alt="Project 2 Screenshot 1">
                    <img src="images/project2_2.png" alt="Project 2 Screenshot 2">
                </div>
            `;
        }
    }
});

