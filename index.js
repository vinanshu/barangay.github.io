var users = [];

// Check if there are previously saved users in local storage
var savedUsers = localStorage.getItem('users');
if (savedUsers) {
  users = JSON.parse(savedUsers);
}

document.addEventListener('DOMContentLoaded', function () {
  // Add event listeners once the DOM is fully loaded
  document.getElementById('loginForm').addEventListener('submit', loginSubmitHandler);
  document.getElementById('registerForm').addEventListener('submit', registerSubmitHandler);
  document.getElementById('adminForm').addEventListener('submit', adminSubmitHandler);
});

function loginSubmitHandler(event) {
  event.preventDefault();
  var email = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;

  var user = users.find(function(user) {
    return user.email === email && user.password === password;
  });

  var loginMessage = document.getElementById('loginMessage');
  if (user) {
    loginMessage.innerText = 'Login successful. Redirecting...';
    loginMessage.classList.add('fadeIn');
    setTimeout(function() {
      window.location.href = 'home.html';
    }, 1500);
  } else {
    loginMessage.innerText = 'Incorrect email or password. Please try again.';
    loginMessage.classList.add('slideInDown');
  }
  loginMessage.style.display = 'block';
}

function registerSubmitHandler(event) {
  event.preventDefault();
  var name = document.getElementById('registerName').value;
  var age = document.getElementById('registerAge').value;
  var location = document.getElementById('registerLocation').value;
  var phoneNumber = document.getElementById('registerPhoneNumber').value;
  var email = document.getElementById('registerEmail').value;
  var password = document.getElementById('registerPassword').value;

  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  var existingUser = users.find(function(user) {
    return user.email === email;
  });

  if (existingUser) {
    alert('Email already exists. Please use a different email address.');
    return;
  }

  users.push({ email: email, password: password, name: name, age: age, location: location, phoneNumber: phoneNumber });

  // Save updated user list to local storage
  localStorage.setItem('users', JSON.stringify(users));

  alert('Registration successful!');

  document.getElementById('registerForm').reset();
}

function adminSubmitHandler(event) {
  event.preventDefault();
  var adminPassword = document.getElementById('adminPassword').value;

  if (adminPassword === 'admin123') {
    // Open admin.html in a new tab
    window.open('admin.html', '_blank');
  } else {
    alert('Incorrect admin password. Please try again.');
  }
}
