document.getElementById("personalInfoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get selected service and personal information
    var selectedService = document.getElementById("serviceSelect").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var location = document.getElementById("location").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;

    // Create service request object
    var serviceRequest = {
        service: selectedService,
        name: name,
        age: age,
        location: location,
        number: number,
        email: email
    };

    // Save service request to localStorage
    var serviceRequests = JSON.parse(localStorage.getItem('serviceRequests')) || [];
    serviceRequests.push(serviceRequest);
    localStorage.setItem('serviceRequests', JSON.stringify(serviceRequests));

    // Display confirmation message
    var confirmationMessage = `Your request for ${selectedService} will be processed. We will contact you at ${number} or ${email}.`;
    alert(confirmationMessage);

    // Redirect to thank you page after confirmation
    window.location.href = "thankyou.html";
});
