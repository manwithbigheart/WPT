// Get the form element from the HTML
        const signupForm = document.getElementById('signupForm');
        const messageDiv = document.getElementById('message');

        // Add an event listener for the form's submit event
        // We make the function 'async' to use 'await' for our fetch calls
        signupForm.addEventListener('submit', async function(event) {
            // Prevent the default form submission which reloads the page
            event.preventDefault();

            // Get the values from the input fields
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Simple validation to check if passwords match
            if (password !== confirmPassword) {
                messageDiv.innerHTML = '<div class="alert alert-danger">Passwords do not match.</div>';
                return; // Stop the function from proceeding
            }

            // --- NEW: Check if email already exists ---
            try {
                // First, we'll check if a user with this email is already in our db.json
                const checkEmailResponse = await fetch(`http://localhost:3000/users?email=${email}`);
                const existingUsers = await checkEmailResponse.json();

                // If the array of users is not empty, it means the email is already taken
                if (existingUsers.length > 0) {
                    messageDiv.innerHTML = '<div class="alert alert-danger">An account with this email already exists.</div>';
                    return; // Stop the function
                }

                // --- If email is unique, proceed with creating the user ---
                const user = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                };

                // This is our AJAX call to create the new user
                const createUserResponse = await fetch('http://localhost:3000/users', {
                    method: 'POST', // We are creating a new user
                    headers: {
                        'Content-Type': 'application/json' // Tell the server we are sending JSON data
                    },
                    body: JSON.stringify(user) // Convert the user object to a JSON string
                });

                if (createUserResponse.status === 201) { // 201 means 'Created'
                    messageDiv.innerHTML = '<div class="alert alert-success">Signup successful! Redirecting to login...</div>';
                    // Redirect to the login page after a short delay
                    setTimeout(() => {
                        window.location.href = 'login.html';
                    }, 2000);
                } else {
                    // Handle potential errors from the server
                    const errorData = await createUserResponse.json();
                    throw new Error(errorData.message || 'Something went wrong during user creation.');
                }

            } catch (error) {
                // Display an error message if any of the fetch calls fail
                console.error('Error:', error);
                messageDiv.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
            }
        });