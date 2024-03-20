window.onload = function() {
    // Retrieve user data from local storage
    var users = JSON.parse(localStorage.getItem('users'));
    var requests = JSON.parse(localStorage.getItem('requests'));
    var serviceRequests = JSON.parse(localStorage.getItem('serviceRequests')); // Retrieve service requests

    if (users) {
        var userTableBody = document.getElementById('user-register').getElementsByTagName('tbody')[0];
        
        users.forEach(function(user) {
            var row = userTableBody.insertRow();
            var nameCell = row.insertCell(0);
            var ageCell = row.insertCell(1);
            var locationCell = row.insertCell(2);
            var emailCell = row.insertCell(3);
            var phoneNumberCell = row.insertCell(4);
            var passwordCell = row.insertCell(5);
            
            nameCell.innerText = user.name;
            ageCell.innerText = user.age;
            locationCell.innerText = user.location;
            emailCell.innerText = user.email;
            phoneNumberCell.innerText = user.phoneNumber;
            passwordCell.innerText = user.password;
        });
    }

    if (requests) {
        var requestTableBody = document.getElementById('user-request').getElementsByTagName('tbody')[0];
        
        requests.forEach(function(request) {
            var row = requestTableBody.insertRow();
            var nameCell = row.insertCell(0);
            var datetimeCell = row.insertCell(1);
            var numberCell = row.insertCell(2);
            var scrollCell = row.insertCell(3);
            
            nameCell.innerText = request.name;
            datetimeCell.innerText = request.datetime;
            numberCell.innerText = request.number;
            scrollCell.innerText = request.scroll;
        });
    }

    if (serviceRequests) {
        var serviceTableBody = document.getElementById('user-service').getElementsByTagName('tbody')[0];
        
        serviceRequests.forEach(function(serviceRequest) {
            var row = serviceTableBody.insertRow();
            var serviceCell = row.insertCell(0);
            var nameCell = row.insertCell(1);
            var ageCell = row.insertCell(2);
            var locationCell = row.insertCell(3);
            var phoneNumberCell = row.insertCell(4);
            var emailCell = row.insertCell(5);
            
            serviceCell.innerText = serviceRequest.service;
            nameCell.innerText = serviceRequest.name;
            ageCell.innerText = serviceRequest.age;
            locationCell.innerText = serviceRequest.location;
            phoneNumberCell.innerText = serviceRequest.number;
            emailCell.innerText = serviceRequest.email;
        });
    }
};
