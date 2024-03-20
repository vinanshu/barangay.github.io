document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the upload button
    document.getElementById('uploadButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        if (!file) {
            setStatusMessage('Please select a file', 'error');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Check if the response is empty
                if (response.status === 204) {
                    return { message: 'File uploaded successfully' };
                }
                return response.json(); // Parse response JSON
            } else {
                // Display detailed error message based on response status
                return response.json().then(data => {
                    throw new Error(data.message || 'Error uploading file');
                });
            }
        })
        .then(data => {
            setStatusMessage(data.message, 'success'); // Display success message
            // Display the uploaded image
            document.getElementById('uploadedImage').src = data.imageUrl;
            document.getElementById('uploadedImageContainer').style.display = 'block';
        })
        .catch(error => {
            console.error('Error:', error.message);
            setStatusMessage(error.message, 'error'); // Display error message
        });
    });

    // Function to set status message
    function setStatusMessage(message, type) {
        const statusMessage = document.getElementById('statusMessage');
        statusMessage.textContent = message;

        if (type === 'error') {
            statusMessage.style.color = 'red';
        } else if (type === 'success') {
            statusMessage.style.color = 'green';
        }
    }
});
