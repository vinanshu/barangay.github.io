
        // Function to open request.html in a new tab
        document.getElementById('requestBtn').addEventListener('click', function () {
            // Open request.html in a new tab
            window.open('request.html', '_blank');
        });

        // Logout functionality
        document.getElementById('logoutBtn').addEventListener('click', function () {
            // Redirect to login page after logout
            window.location.href = 'index.html';
        });

        document.getElementById('scheduleBtn').addEventListener('click', function () {
            window.open('schedule.html', '_blank');
        });

        document.getElementById('eventBtn').addEventListener('click', function () {
            window.open('event.html', '_blank');
        });

        document.getElementById('servicesBtn').addEventListener('click', function () {
            window.open('service.html', '_blank');
        });

        document.addEventListener('DOMContentLoaded', function () {
            // Function to open a page in a new tab
            function openPageInNewTab(pageUrl) {
                window.open(pageUrl, '_blank');
            }

            // Event listeners for buttons
            document.getElementById('requestBtn').addEventListener('click', function () {
                openPageInNewTab('request.html');
            });

            document.getElementById('scheduleBtn').addEventListener('click', function () {
                openPageInNewTab('schedule.html');
            });

            document.getElementById('eventBtn').addEventListener('click', function () {
                openPageInNewTab('event.html');
            });

            document.getElementById('servicesBtn').addEventListener('click', function () {
                openPageInNewTab('service.html');
            });

            document.getElementById('logoutBtn').addEventListener('click', function () {
                window.location.href = 'index.html';
            });
        });
