// Get the form and message elements
        const loginForm = document.getElementById('loginForm');
        const messageDiv = document.getElementById('message');

        // Listen for the form submission
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the page from reloading

            // Get user input
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Use fetch to check for a user with the matching email and password
            // JSON Server lets us filter like this: /users?email=...&password=...
            fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
                .then(response => response.json()) // Convert the response to JSON
                .then(users => {
                    // The result 'users' will be an array.
                    // If the array has at least one user, the login is successful.
                    if (users.length > 0) {
                        // Login successful
                        messageDiv.innerHTML = '<div class="alert alert-success">Login successful! Redirecting...</div>';
                        
                        // We can store some user info in localStorage to use on other pages
                        // This is a simple way to "remember" the user is logged in
                        localStorage.setItem('loggedInUser', JSON.stringify(users[0]));

                        // Redirect to the dashboard page
                        setTimeout(() => {
                            window.location.href = 'dashboard.html';
                        }, 1500);
                    } else {
                        // If the array is empty, no user was found with those credentials
                        messageDiv.innerHTML = '<div class="alert alert-danger">Invalid email or password.</div>';
                    }
                })
                .catch(error => {
                    // Handle network errors
                    console.error('Error:', error);
                    messageDiv.innerHTML = '<div class="alert alert-danger">An error occurred. Please try again later.</div>';
                });
        });