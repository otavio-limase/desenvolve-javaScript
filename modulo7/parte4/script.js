const form = document.getElementById("postForm");
const feed = document.getElementById("feed");

let posts = [];

async function getCatImage() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  return data[0].url;
}

function renderFeed() {
  feed.innerHTML = "";
  posts.forEach((post, index) => {
    const li = document.createElement("li");
    li.classList.add("post");

    li.innerHTML = `
      <div class="post-header">
        <img src="${post.avatar}" alt="avatar" class="avatar">
        <strong>${post.username}</strong> <span style="color:#555;">· ${post.date}</span>
      </div>
      <div class="post-text">${post.text}</div>
      <img src="${post.catImage}" alt="gatinho fofo" class="cat">
      <div>
        <button class="like-btn" onclick="likePost(${index})">Curtir (${post.likes})</button>
      </div>
    `;

    feed.appendChild(li);
  });
}


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = document.getElementById("postText").value.trim();
  if (text === "") return;

  const newPost = {
    date: new Date().toLocaleString(),
    username: "otavio_dev", 
    avatar: "https://i.pravatar.cc/100", 
    text,
    catImage: await getCatImage(),
    likes: 0,
  };

  posts.unshift(newPost); 
  renderFeed();

  form.reset();
});

function likePost(index) {
  posts[index].likes++;
  renderFeed();
}
