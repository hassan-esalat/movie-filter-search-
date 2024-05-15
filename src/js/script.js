import movies from "./main.js";

const searchInput = document.querySelector(".search-input");
const moviesBox = document.querySelector(".movies");

searchInput.addEventListener("input", () => {
  filter.titleSearch = searchInput.value;
  filterMovies(movies, filter);
});
const filter = {
  titleSearch: "",
};

function filterMovies(_movies, _filter) {
  const filteredMovie = _movies.filter((m) => {
    return m.title
      .toLocaleLowerCase()
      .includes(_filter.titleSearch.toLocaleLowerCase());
  });
  showContent(filteredMovie);
}

document.addEventListener("DOMContentLoaded", () => {
  filterMovies(movies, filter);
  searchInput.innerHTML = "";
});

function showContent(movies) {
  moviesBox.innerHTML = "";
  movies.forEach((m) => {
    // console.log(m.genre);
    let res = "";
    [...m.genre].forEach((g) => {
      res += `<span class="movie__genre-title">${g}</span>`;
    });

    const el = document.createElement("div");
    el.classList.add("movie");
    el.innerHTML = `<div class="movie__img">
        <img src="${m.image}" alt="">
    </div>
    <div class="movie__content">
        <h3 class="movie__title">${m.title}</h3>
        <p class="movie_desc">توضیحات فیلم توضیحات فیلم توضیحات فیلم توضیحات فیلم >توضیحات فیلم توضیحات فیلم توضیحات فیلم توضیحات فیلم</p>
        <div class="movie__genre">
            <span>ژانر : </span>
            ${res}
            
         </div>
      <a href="#" class="movie__show btn btn--primary">مشاهده</a>
    </div>`;
    moviesBox.appendChild(el);
  });
}
