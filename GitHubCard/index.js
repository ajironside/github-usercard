/* Step 1: 
using axios, send a GET request to the following URL 
(replacing the palceholder with your Github name):
https://api.github.com/users/ajironside
*/

const entryPointInHTML = document.querySelector('.cards')

const followersArray = [
    'tetondan',
    'dustinmyers',
    'justsml',
    'luishrd',
    'bigknell'
]

/*axios.get('https://api.github.com/users/ajironside')
    .then(response => {
          response.data.message.forEach(url => {
          const newUser = userCard(url);
          entryPointInHTML.appendChild(newUser);
        })
    })
    .catch(error => {
        // handle error
        console.log('Server could not find user data', error)
    }) */

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   Skip to Step 3.
*/

//static example object
const data = [{
    login: "ajironside",
    avatar_url: "https://avatars0.githubusercontent.com/u/29545461?v=4",
    html_url: "https://github.com/ajironside",
    name: "Amanda Ironside",
    location: "NM",
    bio: null,
    followers: 1,
    following: 1
}]

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

const createCard = (data) => {
    //create elements
    //append elements
    //add classes
    //add textContent
    const userCard = document.createElement('div');
    userCard.appendChild(newImage);
    userCard.appendChild(cardInfo);
    userCard.classList.add('card');

    const newImage = document.createElement('img');
    newImage.src = data.avatar_url;

    const cardInfo = document.createElement('div');
    cardInfo.appendChild(userName);
    cardInfo.appendChild(gitName);
    cardInfo.appendChild(userLoc);
    cardInfo.appendChild(userProfile);
    cardInfo.appendChild(userFollowers);
    cardInfo.appendChild(userFollowing);
    cardInfo.appendChild(userBio);
    cardInfo.classList.add('card-info');

    const userName = document.createElement('h3');
    userName.classList.add('name');
    userName.textContent = data.name;

    const gitName = document.createElement('p');
    gitName.classList.add('username');
    gitName.textContent = data.login;

    const userLoc = document.createElement('p');
    userLoc.textContent = location;

    const userProfile = document.createElement('p');
    userProfile.appendChild(userPage);
    userProfile.textContent = "Profile: ";

    const userPage = document.createElement('a');
    userPage.src = data.html_url;

    const userFollowers = document.createElement('p');
    userFollowers.textContent = data.followers;

    const userFollowing = document.createElement('p');
    userFollowing.textContent = data.following;

    const userBio = document.createElement('p');
    userBio.textContent = data.bio;

    return userCard;
}

//grab parent element
const page = document.querySelector('.container');

//append to parent element
data.map(userData => {
    page.appendChild(createCard(userData.avatar_url, userData.name, userData.login, userData.location, userData.html_url, userData.followers, userData.following))
})

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/