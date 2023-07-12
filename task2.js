const url = "https://jsonplaceholder.typicode.com/posts";

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function displayPost() {
  const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
  const users = await fetchData("https://jsonplaceholder.typicode.com/users");
  const comments = await fetchData("https://jsonplaceholder.typicode.com/comments");
  const container = document.createElement("div");
  container.className = "container";

  posts.forEach(post => {
    const postId = post.id;
    const postTitle = post.title;
    const postBody = post.body;
    const user = users.find(user => user.id === post.userId);
    const username = user ? user.username : "Unknown";

    const postElement = document.createElement("div");
    postElement.className = "post-card";
    postElement.innerHTML = `
      <h1><i class="fas fa-user"></i> ${username}</h1>
      <h4>Title: ${postTitle}</h4>
      <h4>Body: ${postBody}</h4>
      <button class="comment-button">Comment</button>
      <div class="comments-container" style="display: none;"></div>
    `;

    const button = postElement.querySelector(".comment-button");
    const commentsContainer = postElement.querySelector(".comments-container");

    button.addEventListener("click", async () => {
      if (commentsContainer.style.display === "none") {
        const postComments = comments.filter(comment => comment.postId === postId);
        commentsContainer.innerHTML = postComments
          .map(comment => `<p>Email: ${comment.email}<br>Body: ${comment.body}</p>`)
          .join("");
        commentsContainer.style.display = "block";
      } else {
        commentsContainer.style.display = "none";
      }
    });

    container.appendChild(postElement);
  });

  document.body.appendChild(container);
}

displayPost();
