// Function to fetch and display user data
async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const dataContainer = document.getElementById("api-data");

    try {
        // Fetch user data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = "";

        // Create list
        const userList = document.createElement("ul");

        // Append each user name
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = "";
        dataContainer.textContent = "Failed to load user data.";
        console.error("Error fetching data:", error);
    }
}

// Run after DOM is loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
