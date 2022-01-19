const ACCESS_KEY = "_r_xam0UkD7T_148G9uD4oUZOGzXD_LgsI1IGCx63pk";

const SECRET_KEY = "7aFx00Qn5rxNs6t0UosGdyYxP3fY5rC2H0rGhZ4jSc8";

const exec = function () {
  const f = fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`);

  f.then((resp) => {
    return resp.json();
  })
    .then((r) => {
      console.log(r);

      r.forEach((elem) => {
        const container = document.getElementById("container");
        console.log(elem.urls.regular);
        const img_loc = elem.links.download;
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = img_loc;
        div.appendChild(img);
        container.appendChild(div);
      });
    })
    .catch((e) => {
      console.log("Something error in fetvhing");
    });
};

exec();

// To load random other images on scrolling to the bottom.

const random_images = function () {
  var lower = 0;
  var upper = 100000000;

  for (i = 0; i < 10; i++) {
    const container = document.getElementById("container");
    const img_loc =
      "https://picsum.photos/500/300?random=" +
      (Math.floor(Math.random() * (upper - lower)) + lower);
    console.log(img_loc);
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = img_loc;
    div.appendChild(img);
    container.appendChild(div);
  }
};

const body = document.getElementsByTagName("body")[0];
window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    random_images();
  }
};
