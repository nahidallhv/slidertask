window.onload = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=9b9210b068aaca4bb4b7e8d00a540fa7")
      .then(res => res.json())
      .then(data => {
        if(data && data.results) {
          let movies = data.results;
          let slidermain = document.createElement('div');
          slidermain.classList.add('slider');
          movies.forEach(movie => {
            let slide = document.createElement('div');
            slide.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">`;
            slidermain.appendChild(slide);
          });
          document.body.appendChild(slidermain);
          $(slidermain).slick({
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            arrows: true,
            centerMode: true,
            centerPadding: '0',
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                }
              }
            ]
          });
        }
      })
  };
  
  
  