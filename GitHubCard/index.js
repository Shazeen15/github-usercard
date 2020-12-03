import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
    https://api.github.com/users/Shazeen15
*/
const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "Shazeen15",
];

followersArray.forEach((user) => {
  const myUserName = `https://api.github.com/users/${user}`;
  axios
    .get(myUserName)
    .then((response) => {
      const data = response.data;
      // console.log(data)
      const cardMaker = cardCreator(data);
      gitHubCard.appendChild(cardMaker);
    })
    .catch((error) => {
      console.log("The data was not returned:", error);
    });
});

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

const gitHubCard = document.querySelector(".cards");

function cardCreator(data) {
  const cardDiv = document.createElement("div");
  const myImage = document.createElement("img");
  const cardInfo = document.createElement("div");
  const myName = document.createElement("h3");
  const userName = document.createElement("p");
  const myLocation = document.createElement("p");
  const profile = document.createElement("p");
  const profileLink = document.createElement("a");
  const myFollowers = document.createElement("p");
  const myFollows = document.createElement("p");
  const myBio = document.createElement("p");

  //add class
  cardDiv.classList.add("card");
  cardInfo.classList.add("card-info");
  myName.classList.add("name");
  userName.classList.add("username");

  //appending
  cardDiv.appendChild(myImage);
  cardDiv.appendChild(cardInfo);
  cardInfo.appendChild(myName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(myLocation);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(myFollowers);
  cardInfo.appendChild(myFollows);
  cardInfo.appendChild(myBio);

  myImage.src = data.avatar_url;
  myName.textContent = data.name;
  userName.textContent = data.login;
  myLocation.textContent = `Location: ${data.location}`;
  profile.textContent = "Profile:";
  profileLink.href = data.html_url;
  profileLink.textContent = data.html_url;
  myFollowers.textContent = `Followers: ${data.followers}`;
  myFollows.textContent = `Following: ${data.following}`;
  myBio.textContent = `Bio: ${data.bio}`;

  console.log("data.html_url", data.html_url);

  return cardDiv;
}

/*
  List of LS Instructors Github username's:
    tetondan,
    dustinmyers,
    justsml,
    luishrd,
    bigknell,
*/
