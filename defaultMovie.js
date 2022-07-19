var slidebar = document.getElementById("slidebar");
var products = JSON.parse(localStorage.getItem("mcart"));
products.forEach(function (prod) {
  console.log(prod.id);
  async function getMovie() {
    try {
      // let movie_name=document.getElementById("movie-name").value
      let res1 = await fetch(
        `https://api.themoviedb.org/3//movie/${prod.id}?api_key=ac0e095d5ca7ec68c7406d38019b52fa&language=en-US`
      );
      // let res1=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ac0e095d5ca7ec68c7406d38019b52fa&language=en-US`)
      // let data1=await res1.json()
      let data = await res1.json();
      console.log(data);
      let mvdata = data;
      showMovies(mvdata);
    } catch (res) {
      console.log(res);
    }
  }
  getMovie();
});

//shwoing the movie detail

function showMovies(product) {
  console.log(product.original_title);

  let div = document.createElement("div");
  let div2 = document.createElement("div");
  let mv_title = document.createElement("p");
  mv_title.innerText = "Title :" + product.original_title;
  let mv_rating = document.createElement("p");
  mv_rating.innerText = "Imdb :" + product.vote_average;
  let poster = document.createElement("img");
  poster.src = `https://image.tmdb.org/t/p/w500/${product.poster_path}`;
  let lang = document.createElement("p");
  lang.innerText = "Language :" + product.original_language;
  let runtime = document.createElement("p");
  runtime.innerText = "Runtime :" + product.runtime;
  let overview = document.createElement("p");
  overview.innerText = "Overview :" + product.overview;
  let genre = document.createElement("p");
  let recommend = document.createElement("p");
  recommend.innerText = "Recommended";
  genre.innerText = "Genre :" + product.genres[0].name;
  //poster.className="poster-hover"

  div.style.width = "98%";
  div.style.height = "460px";

  mv_title.style.fontSize = "18px";
  // mv_title.style.display="flex"

  poster.style.width = "100%";
  poster.style.height = "100%";
  div.append(poster);
  div2.append(mv_title, genre, lang, runtime, mv_rating, overview);
  slidebar.style.position = "relative";

  slidebar.append(div, div2);
  slidebar.style.width = "98%";
  div2.style.fontWeight = "600";
  div2.style.paddingLeft = "10px";
  div2.classList.add("movieDetails");
}

// showMovie(products)

var searchDropdown = document.getElementById("search-dropdown");

async function searchMovie() {
  try {
    let movie_name = document.getElementById("movie-name").value;
    let res = await fetch(
      `https://www.omdbapi.com/?apikey=8a493bfd&s=${movie_name}`
    );
    // let res1=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ac0e095d5ca7ec68c7406d38019b52fa&language=en-US`)
    // let data1=await res1.json()
    let data = await res.json();
    console.log(data);
    let mvdata = data.Search;
    showMovie(mvdata);
  } catch (res) {
    console.log(res);
  }
}
async function defaultMovie() {
  try {
    let res1 = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=ac0e095d5ca7ec68c7406d38019b52fa&language=en-US`
    );
    let res2 = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=ac0e095d5ca7ec68c7406d38019b52fa&language=en-US`
    );
    let res3 = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=ac0e095d5ca7ec68c7406d38019b52fa&language=en-US`
    );
    let res4 = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming/?api_key=ac0e095d5ca7ec68c7406d38019b52fa&language=en-US`
    );

    let data1 = await res1.json();
    let data2 = await res2.json();
    let data3 = await res3.json();
    let data4 = await res4.json();
    showDefault(data1.results);
    showDefault2(data2.results);
    showDefault3(data3.results);
    showDefault4(data4.results);
    console.log(data1.results);
  } catch (res) {
    console.log(res);
  }
}
defaultMovie();

var movie_div = document.getElementById("movie-div");
var movie_div2 = document.getElementById("movie-div2");
var movie_div3 = document.getElementById("movie-div3");
var movie_div4 = document.getElementById("movie-div4");

function showDefault(prod1) {
  // movie_div.innerHTML=null;

  if (prod1 == undefined) {
    let giferr = document.createElement("img");
    giferr.src =
      "https://miro.medium.com/max/1400/1*zBFBJktPD3_z0S_35kO5Hg.gif";
    movie_div.append(giferr);
  }
  prod1.forEach(function (product) {
    let div = document.createElement("div");
    let mv_title = document.createElement("p");
    mv_title.innerText = "Title :" + product.original_title;
    let mv_rating = document.createElement("p");
    mv_rating.innerText = "Imdb :" + product.vote_average;
    let poster = document.createElement("img");
    poster.src = `https://image.tmdb.org/t/p/w500/${product.poster_path}`;
    let lang = document.createElement("p");
    lang.innerText = "Language :" + product.original_language;
    let runtime = document.createElement("p");
    runtime.innerText = "Runtime :" + product.Runtime;
    let actor = document.createElement("p");
    actor.innerText = "Actors :" + product.Actors;
    let genre = document.createElement("p");
    let recommend = document.createElement("p");
    recommend.innerText = "Recommended";
    genre.innerText = "Genre :" + product.Genre;
    poster.className = "poster-hover";

    div.append(poster);
    div.style.margin = "1%";
    movie_div.append(div);
    //if(product.vote_average>8.5){
    //   div.append(poster,mv_title,genre,lang,actor,runtime,mv_rating)

    // console.log(mv)
    //}else{
    //div.append(poster,mv_title,genre,lang,actor,runtime,mv_rating)

    // console.log(mv)
    //}

    //div.append(poster,mv_title,genre,lang,actor,runtime,mv_rating,recommend)
    poster.onclick = function () {
      showData(product);
      window.location.href = "defaultMovie.html";
    };
  });
}

//show default2

function showDefault2(prod1) {
  // movie_div.innerHTML=null;

  if (prod1 == undefined) {
    let giferr = document.createElement("img");
    giferr.src =
      "https://miro.medium.com/max/1400/1*zBFBJktPD3_z0S_35kO5Hg.gif";
    movie_div.append(giferr);
  }
  prod1.forEach(function (product) {
    let div = document.createElement("div");
    let mv_title = document.createElement("p");

    let poster = document.createElement("img");
    poster.src = `https://image.tmdb.org/t/p/w500/${product.poster_path}`;
    poster.className = "poster-hover";

    div.append(poster);
    div.style.margin = "1%";
    movie_div2.append(div);

    //div.append(poster,mv_title,genre,lang,actor,runtime,mv_rating,recommend)
    poster.onclick = function () {
      showData(product);
      window.location.href = "defaultMovie.html";
    };
  });
}

//default movie3

function showDefault3(prod1) {
  // movie_div.innerHTML=null;

  if (prod1 == undefined) {
    let giferr = document.createElement("img");
    giferr.src =
      "https://miro.medium.com/max/1400/1*zBFBJktPD3_z0S_35kO5Hg.gif";
    movie_div.append(giferr);
  }
  prod1.forEach(function (product) {
    let div = document.createElement("div");
    let mv_title = document.createElement("p");

    let poster = document.createElement("img");
    poster.src = `https://image.tmdb.org/t/p/w500/${product.poster_path}`;
    poster.className = "poster-hover";

    div.append(poster);
    div.style.margin = "1%";
    movie_div3.append(div);

    //div.append(poster,mv_title,genre,lang,actor,runtime,mv_rating,recommend)
    poster.onclick = function () {
      showData(product);
      window.location.href = "defaultMovie.html";
    };
  });
}

//default movie 4

function showDefault4(prod1) {
  // movie_div.innerHTML=null;

  if (prod1 == undefined) {
    let giferr = document.createElement("img");
    giferr.src =
      "https://miro.medium.com/max/1400/1*zBFBJktPD3_z0S_35kO5Hg.gif";
    movie_div.append(giferr);
  }
  prod1.forEach(function (product) {
    let div = document.createElement("div");
    let mv_title = document.createElement("p");

    let poster = document.createElement("img");
    poster.src = `https://image.tmdb.org/t/p/w500/${product.poster_path}`;
    poster.className = "poster-hover";

    div.append(poster);
    div.style.margin = "1%";
    movie_div4.append(div);

    //div.append(poster,mv_title,genre,lang,actor,runtime,mv_rating,recommend)
    poster.onclick = function () {
      showData(product);
      window.location.href = "defaultMovie.html";
    };
  });
}

//search movie

function showMovie(prod) {
  searchDropdown.innerHTML = null;

  if (prod == undefined) {
    let giferr = document.createElement("img");
    giferr.style.width = "99%";
    giferr.src =
      "https://miro.medium.com/max/1400/1*zBFBJktPD3_z0S_35kO5Hg.gif";
    searchDropdown.append(giferr);
  }
  prod.forEach(function (product) {
    // var movie_div=document.getElementById("movie-div");

    let div = document.createElement("div");
    let mv_title = document.createElement("p");
    mv_title.innerText = "Title :" + product.Title;
    let mv_rating = document.createElement("p");
    mv_rating.innerText = "Imdb :" + product.imdbRating;
    let poster = document.createElement("img");
    poster.src = product.Poster;
    let lang = document.createElement("p");
    lang.innerText = "Language :" + product.Language;
    let runtime = document.createElement("p");
    runtime.innerText = "Runtime :" + product.Runtime;
    let actor = document.createElement("p");
    actor.innerText = "Actors :" + product.Actors;
    let genre = document.createElement("p");
    let recommend = document.createElement("p");
    recommend.innerText = "Recommended";
    genre.innerText = "Genre :" + product.Genre;

    div.style.width = "95%";
    div.style.height = "160px";
    div.style.display = "flex";
    div.style.margin = "5px";
    div.style.backgroundColor = "#183144";
    poster.style.margin = "3%";
    poster.style.width = "10%";
    searchDropdown.style.height = "400px";
    searchDropdown.style.display = "flex";
    searchDropdown.style.flexDirection = "column";
    searchDropdown.style.width = "400px";
    searchDropdown.style.overflow = "scroll";
    searchDropdown.style.backgroundColor = "#0c1a20";
    mv_title.style.fontSize = "13px";
    mv_title.style.marginLeft = "15px";
    mv_title.style.width = "70%";
    mv_title.style.marginTop = "4px";
    mv_title.style.marginTop = "3%";
    mv_title.style.color = "white";

    poster.style.width = "150px";
    poster.style.height = "70px";
    div.append(poster, mv_title);
    searchDropdown.appendChild(div);
    if (product.imdbRating > 8.5) {
      //div.append(poster,mv_title,genre,lang,actor,runtime,mv_rating,recommend)
      poster.onclick = function () {
        showData(product);
        window.location.href = "movieDetails.html";
      };

      // searchDropdown.append(poster,mv_title)
      //console.log(mv)
    } else {
      // poster.append(mv_title,genre,lang,actor,runtime,mv_rating)
      //searchDropdown.append(poster,mv_title)
      poster.onclick = function () {
        showData(product);
        window.location.href = "movieDetails.html";
      };

      console.log(movie_div);
    }
  });
}

window.addEventListener("click", function (e) {
  var x = document.querySelector("#search-dropdown");
  if (event.target != document.querySelector(".search-drop")) {
    x.style.display = "none";
  }
});

//debounce
var timerid;

function debounce(func, delay) {
  if (timerid) {
    clearTimeout(timerid);
  }
  timerid = setTimeout(function () {
    func();
  }, delay);
}

if (localStorage.getItem("mcart") === null) {
  localStorage.setItem("mcart", JSON.stringify([]));
}
function showData(p) {
  var products_cart = JSON.parse(localStorage.getItem("mcart"));
  //products_cart.push(p)
  products_cart.pop();
  products_cart.push(p);

  localStorage.setItem("mcart", JSON.stringify(products_cart));

  //localStorage.setItem('cart',JSON.stringify(products_cart))
}

//login & signup page

var signupBtn = document.getElementById("signup-btn");
var loginBtn = document.getElementById("login-btn");
//signupBtn.addEventListener("click",signup)
//loginBtn.addEventListener("click",login)

let closeBtn2 = document.getElementById("closeBtn2");
closeBtn2.onclick = function () {
  let login1 = document.getElementById("login");

  login1.style.display = "none";
};
let closeBtn1 = document.getElementById("closeBtn1");
closeBtn1.onclick = function () {
  let login1 = document.getElementById("signup");

  login1.style.display = "none";
};

loginBtn.onclick = function () {
  let loginshow = document.getElementById("login");
  //loginshow.innerHTML=null;
  loginshow.style.display = "block";
  // loginshow.style.background="#0c1a25"
};
signupBtn.onclick = function () {
  let signupshow = document.getElementById("signup");
  //signupshow.innerHTML=null;
  signupshow.style.display = "block";
  // signupshow.style.backgroundColor="#0c1a25"
};
var form = document.getElementById("signup-form");

//login &signup
function signup(e) {
  e.preventDefault();
  let userdata = {
    name: form.name.value,
    email: form.name.value,
    password: form.password.value,
    username: form.username.value,
    description: form.description.value,
    mobile: form.mobile.value,
  };
  userdata = JSON.stringify(userdata);
  fetch("http://masai-api-mocker.herokuapp.com/auth/register", {
    method: "POST",
    body: userdata,
    headers: {
      "Content-Type": "application/json",
      mode: "cors",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

function login(e) {
  e.preventDefault();
  let form1 = document.getElementById("login-form");
  let userdata = {
    username: form1.username2.value,
    password: form1.password2.value,
  };
  let data_to_send = JSON.stringify(userdata);

  fetch("http://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",
    body: data_to_send,

    headers: {
      "Content-Type": "application/json",
      mode: "cors",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      fetchData(userdata.username, res.token);
    })
    .catch((err) => {
      console.log(err);
    });
}

function fetchData(username, token) {
  fetch(`http://masai-api-mocker.herokuapp.com/user/${username}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      mode: "cors",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      console.log(res.name);
      if (res.name != "") {
        let subBtn = document.getElementById("login-btn");
        subBtn.innerText = "Hello!," + " " + res.name;
        subBtn.style.fontSize = "14px";
        subBtn.style.fontWeight = "300";
        let signupBtn = document.getElementById("signup-btn");
        signupBtn.style.display = "none";
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
function homepage() {
  window.location.href = "movie3.html";
}
