/* Step 1: 
using axios, send a GET request to the following URL 
(replacing the palceholder with your Github name):
https://api.github.com/users/ajironside
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   Skip to Step 3.
*/

/* Step 4: 
Pass the data received from Github into your function, 
create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: 
Now that you have your own card getting added to the DOM, either follow this link 
in your browser --> https://api.github.com/users/<Your github name>/followers
and manually find some other users' github handles, 
or use the list found at the bottom of the page. 
Get at least 5 different Github usernames 
and add them as Individual strings to the friendsArray below.
          
Using that array, iterate over it, requesting data for each user, 
creating a new card for each user, and adding that card to the DOM.
*/

/* Step 3: 
Create a function that accepts a single object as its only argument,
Using DOM methods and properties, 
create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

const entryPointInHTML = document.querySelector('.cards')

axios.get('https://api.github.com/users/ajironside')
    .then(response => {
        let card = createCard(response.data);
        entryPointInHTML.prepend(card);
        return response.data.followers_url;
    })
    .then(response => {
        axios.get(response)
            .then(response => {
                response.data.forEach(result => {
                    axios.get(result.url)
                        .then(response => {
                            let card = createCard(response.data);
                            entryPointInHTML.append(card);
                        })
                })
            })
    })
    .catch(error => {
        console.log('Error: ', error)
    })

const createCard = (data) => {
    //create elements
    const userCard = document.createElement('div');
    const newImage = document.createElement('img');
    const cardInfo = document.createElement('div');
    const userName = document.createElement('h3');
    const gitName = document.createElement('p');
    const userLoc = document.createElement('p');
    const userProfile = document.createElement('p');
    const userFollowers = document.createElement('p');
    const userFollowing = document.createElement('p');
    const userBio = document.createElement('p');

    //append elements
    userCard.appendChild(newImage);
    userCard.appendChild(cardInfo);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(gitName);
    cardInfo.appendChild(userLoc);
    cardInfo.appendChild(userProfile);
    cardInfo.appendChild(userFollowers);
    cardInfo.appendChild(userFollowing);
    cardInfo.appendChild(userBio);

    //add classes
    userCard.classList.add('card');
    cardInfo.classList.add('card-info');
    userName.classList.add('name');
    gitName.classList.add('username');

    //add textContent and source info
    newImage.src = data.avatar_url;
    userName.textContent = data.name;
    gitName.textContent = data.login;
    userLoc.textContent = data.location;
    userProfile.textContent = "Profile: " + data.html_url;
    userFollowers.textContent = data.followers;
    userFollowing.textContent = data.following;
    userBio.textContent = data.bio;

    return userCard;
}

const followersArray = [
    "tetondan",
    "dustinmyers",
    "justsml",
    "luishrd",
    "bigknell"
]

followersArray.forEach(follower => {
    axios.get(`https://api.github.com/users/${follower}`)
        .then(response => {
            let card = createCard(response.data);
            entryPointInHTML.append(card);
        })
        .catch(error => {
            console.log('Error: ', error);
        });
})

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/