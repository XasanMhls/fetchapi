// const userCardsContainer = document.getElementById('userCards')
// const searchInput = document.getElementById('search')
// const darkModeToggle = document.getElementById('darkModeToggle')

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(data => {
//     users = data
//     displayUsers(users)
// })

// function displayUsers(users){
//     userCardsContainer.innerHTML = '';
//     userCardsContainer.forEach(user => {
//         const cards = document.createElement('div')
//         card.classname - 'card'
//         card.innerHTML = `
//             <h2>${user.name}</h2>
//             <p>📧${user.email}</p>
//             <p>📞${user.phone}</p>
//            <p> 🏠${user.adress.city},${user.adress.street}</p>
//             `;
//             userCardsContainer.appendChild(card)
//     });
// }
// searchInput.addEventListener('input', () => {
//     const searchTerm = searchInput.value.toLowerCase()
//     const filteredUsers = users.filter(user => 
//         user.name.toLowerCase().includes(searchTerm) 
//     )
//     displayUsers(filteredUsers)
// })
// darkModeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode')
    

// })
const userCardsContainer = document.getElementById('userCards');
const searchInput = document.getElementById('search');
const darkModeToggle = document.getElementById('darkModeToggle');

let users = []; // Declare the users array

// Fetch user data from the API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    users = data; // Assign data to users
    displayUsers(users); // Display users
  })
  .catch(error => console.error('Error fetching data:', error)); // Handle errors

// Function to display user cards
function displayUsers(users) {
  userCardsContainer.innerHTML = ''; // Clear container
  users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'card'; // Correct property is className
    card.innerHTML = `
      <h2>${user.name}</h2>
      <p>📧 ${user.email}</p>
      <p>📞 ${user.phone}</p>
      <p>🏠 ${user.address.city}, ${user.address.street}</p>
    `;
    userCardsContainer.appendChild(card);
  });
}

// Search filter for users
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm)
  );
  displayUsers(filteredUsers);
});

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});