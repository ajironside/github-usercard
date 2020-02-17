/* Step 1: 
using axios, send a GET request to the following URL 
(replacing the palceholder with your Github name):
https://api.github.com/users/ajironside
*/

/* axios.get('https://api.github.com/users/ajironside')
    .then(function(response) {
        // handle success
        console.log(response)
    })
    .catch(function(error) {
        // handle error
        console.log(error)
    })
    .then(function() {
        // always executed
    }); */

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   data:
    login: "ajironside"
    id: 29545461
    node_id: "MDQ6VXNlcjI5NTQ1NDYx"
    avatar_url: "https://avatars0.githubusercontent.com/u/29545461?v=4"
    gravatar_id: ""
    url: "https://api.github.com/users/ajironside"
    html_url: "https://github.com/ajironside"
    followers_url: "https://api.github.com/users/ajironside/followers"
    following_url: "https://api.github.com/users/ajironside/following{/other_user}"
    gists_url: "https://api.github.com/users/ajironside/gists{/gist_id}"
    starred_url: "https://api.github.com/users/ajironside/starred{/owner}{/repo}"
    subscriptions_url: "https://api.github.com/users/ajironside/subscriptions"
    organizations_url: "https://api.github.com/users/ajironside/orgs"
    repos_url: "https://api.github.com/users/ajironside/repos"
    events_url: "https://api.github.com/users/ajironside/events{/privacy}"
    received_events_url: "https://api.github.com/users/ajironside/received_events"
    type: "User"
    site_admin: false
    name: "Amanda Ironside"
    company: null
    blog: ""
    location: "NM"
    email: null
    hireable: null
    bio: null
    public_repos: 105
    public_gists: 0
    followers: 1
    following: 1
    created_at: "2017-06-19T13:58:03Z"
    updated_at: "2020-02-07T15:52:16Z"

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/