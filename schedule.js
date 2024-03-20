document.addEventListener('DOMContentLoaded', function () {
    const scheduleContainer = document.getElementById('schedule-container');
    const scheduleTable = document.getElementById('schedule-table');
    let requests = JSON.parse(localStorage.getItem('requests')) || [];

    // Remove requests older than 7 days
    const currentDate = new Date();
    const sevenDaysAgo = new Date(currentDate);
    sevenDaysAgo.setDate(currentDate.getDate() - 7);

    requests = requests.filter(request => {
        return new Date(request.datetime) >= sevenDaysAgo;
    });

    // Save updated requests to localStorage
    localStorage.setItem('requests', JSON.stringify(requests));

    if (requests.length === 0) {
        scheduleContainer.textContent = "No requests found.";
    } else {
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        // Table Header
        const headerRow = document.createElement('tr');
        ['Name', 'Date and Time', 'Number', 'Scroll'].forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        scheduleTable.appendChild(thead);

        // Table Body
        requests.forEach(request => {
            const row = document.createElement('tr');
            ['name', 'datetime', 'number', 'scroll'].forEach(key => {
                const cell = document.createElement('td');
                cell.textContent = request[key];
                row.appendChild(cell);
            });
            tbody.appendChild(row);
        });
        scheduleTable.appendChild(tbody);
    }
});
