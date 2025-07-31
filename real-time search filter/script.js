const users = [
  {
    name: "rishi jha",
    pic: "https://images.unsplash.com/photo-1651970737312-74ee31689bdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhhbmRzb21lJTIwYm95JTIwcGljfGVufDB8fDB8fHww",
    bio: "main character energy"
  },
  {
    name: "aisha verma",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60",
    bio: "sunshine mixed with a little hurricane"
  },
  {
    name: "arjun mehta",
    pic: "https://images.unsplash.com/photo-1603415526960-f9e4186da230?w=600&auto=format&fit=crop&q=60",
    bio: "dreaming with my eyes open"
  },
  {
    name: "neha singh",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
    bio: "chaos in cute packaging"
  },
  {
    name: "vihaan roy",
    pic: "https://images.unsplash.com/photo-1507038732509-8ecb5f6d1f90?w=600&auto=format&fit=crop&q=60",
    bio: "code. eat. repeat."
  },
  {
    name: "nehu kapoor",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60",
    bio: "coffee in hand, confidence on point"
  },
  {
    name: "kabir sharma",
    pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60",
    bio: "not everyone has to like me, I can't force them to have good taste"
  }
];

function showUsers(arr) {
  const container = document.querySelector(".cards-container");
  
  arr.forEach(function(user) {
    // Create the main card container
    const card = document.createElement('div');
    card.classList.add('card');

    // Create the background image
    const bgImg = document.createElement('img');
    bgImg.classList.add('bg-img');
    bgImg.src = user.pic;

    // Create the blurred layer
    const blurredLayer = document.createElement('div');
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add('blurred-layer');

    // Create the content container
    const content = document.createElement('div');
    content.classList.add('content');

    // Create the heading
    const heading = document.createElement('h3');
    heading.textContent = user.name;

    // Create the paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = user.bio;

    // Append elements to build the structure
    content.appendChild(heading);
    content.appendChild(paragraph);

    card.appendChild(bgImg);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Add the card to the container
    container.appendChild(card);
  });
}

// Show all users initially
showUsers(users);

// Search functionality
const inp = document.querySelector(".inp");
inp.addEventListener("input", function() {
   const searchValue = inp.value.trim();
   const container = document.querySelector(".cards-container");
   
   // Clear existing cards
   container.innerHTML = "";
   
   // If search is empty, show all users
   if (searchValue === '') {
       showUsers(users);
       return;
   }
   
   // Filter users
   const filteredUsers = users.filter(function(user) {
       return user.name.toLowerCase().startsWith(searchValue.toLowerCase());
   });
   
   // Show filtered users or all users if no match
   if (filteredUsers.length > 0) {
       showUsers(filteredUsers);
   } else {
       showUsers(users);
   }
});