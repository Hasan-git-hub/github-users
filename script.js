const api = "https://api.github.com/users/";
const token = "ghp_yourgithubtokenhe";

const searchInput = document.querySelector(".search");
const searchButton = document.querySelector(".button");
const results = document.querySelector(".results");

searchButton.addEventListener("click", getGitHubUser);

function getGitHubUser() {
  const username = searchInput.value.trim();

  if (!username) {
    results.textContent = "Enter username";
    return;
  }

  results.textContent = "Loading...";

  axios
    .get(api + username, {
      headers: {
        Authorization: `token ${token}`
      }
    })
    .then(res => renderGitHubUser(res.data))
    .catch(() => {
      results.textContent = "User not found or API limit";
    });
}

function renderGitHubUser(data) {
  results.innerHTML = `
    <div class="card">
      <img src="${avatar_url}" width="100">
      <h3>${login}</h3>
      <p>Repos: ${public_repos}</p>
      <a href="${html_url}" target="_blank">Profile</a>
    </div>  
  `;
}
