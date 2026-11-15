/* ----- 1. DATA MOCK ----- */
/* Về cơ bản sẽ giống dữ liệu lấy từ API, nhưng thầy viết mô phỏng ở đây cho dễ học vì thường dữ liệu trả về từ API cấu trúc rất phức tạp và khó hiểu */

const trendingMovies = [
  {
    title: "IF",
    poster: "https://image.tmdb.org/t/p/w500/wwMNvE1zpSjFDoxFIdea0anb95g.jpg",
  },
  {
    title: "Space Cadet",
    poster: "https://image.tmdb.org/t/p/w500/7QUOIldN6ShKj1LdLhO26a8QXND.jpg",
  },
  {
    title: "The Bikeriders",
    poster: "https://image.tmdb.org/t/p/w500/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
  },
  {
    title: "Godzilla x Kong",
    poster: "https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
  },
  {
    title: "Deadpool & Wolverine",
    poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
  },
  {
    title: "Civil War",
    poster: "https://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
  },
  {
    title: "Dune: Part Two",
    poster: "https://image.tmdb.org/t/p/w500/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",
  },
  {
    title: "A Family Affair",
    poster: "https://image.tmdb.org/t/p/w500/ArvoFK6nlouZRxYmtIOUzKIrg90.jpg",
  },
  {
    title: "Despicable Me 4",
    poster: "https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
  },
];

const popularMovies = [
  {
    title: "Civil War",
    poster: "https://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
  },
  {
    title: "MR-9: Do or Die",
    poster: "https://image.tmdb.org/t/p/w500/yF2g3MDacpZTMywh97qghW6Y0H4.jpg",
  },
  {
    title: "The Infallibles",
    poster: "https://image.tmdb.org/t/p/w500/7PoIAvL3Io5v0HyBliXfXZruQTi.jpg",
  },
  {
    title: "The Watchers",
    poster: "https://image.tmdb.org/t/p/w500/vZVEUPychdvZLrTNwWErr9xZFmu.jpg",
  },
  {
    title: "Beverly Hills Cop: Axel F",
    poster: "https://image.tmdb.org/t/p/w500/3DlYiSh3S7A9GO15gUu7zg92bD0.jpg",
  },
  {
    title: "Inside Out",
    poster: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
  },
  {
    title: "A Quiet Place: Day One",
    poster: "https://image.tmdb.org/t/p/w500/hU42CRk14JuPEdqZG3AWmagiPAP.jpg",
  },
  {
    title: "The Garfield Movie",
    poster: "https://image.tmdb.org/t/p/w500/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg",
  },
  {
    title: "Despicable Me 4",
    poster: "https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
  },
];

/* ----- 2. HÀM TẠO HTML CHO 1 PHIM ----- */

function createMovieItem(movie) {
  return `
    <div class="carousel-item">
      <img
        src="${movie.poster}"
        class="d-block w-100 movie-poster"
        alt="${movie.title}"
      >
      <p class="movie-name">${movie.title}</p>
    </div>
  `;
}

/* ----- 3. HÀM HIỂN THỊ DANH SÁCH LÊN GIAO DIỆN ----- */
/*
  movies  : mảng data mock
  elementId : id của .carousel-inner trong HTML
*/

function renderMovies(movies, elementId) {
  // Lấy thẻ chứa danh sách phim
  const container = document.getElementById(elementId);

  // Xóa nội dung cũ (nếu có)
  container.innerHTML = "";

  // Duyệt từng phim trong mảng và ghép HTML
  let html = "";
  for (let i = 0; i < movies.length; i++) {
    html += createMovieItem(movies[i]);
  }

  // Đưa HTML vào giao diện
  container.innerHTML = html;
}

/* ----- 4. CHẠY KHI TRANG LOAD XONG ----- */
renderMovies(trendingMovies, "trendingList");
renderMovies(popularMovies, "popularList");
