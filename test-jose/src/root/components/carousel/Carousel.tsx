import React, { useEffect, useState } from "react";

interface Repo {
  name: string;
  description: string;
  html_url: string;
}

export function Carousel() {
  const [repos, setRepos] = useState<Repo[]>([]);

  const url = "https://api.github.com/users/PrinceMora/repos";

  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRepos(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        {repos.map((repo, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index.toString()}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={"Slide " + (index + 1)}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {repos.map((repo, index) => (
          <div
            key={index}
            className={"carousel-item " + (index === 0 ? "active" : "")}
          >
            <img
              src="	https://img.freepik.com/psd-premium/papel-a4-maqueta-carpeta-presentacion_47987-2579.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{repo.name}</h5>
              <p>{repo.description}</p>
              <a href={repo.html_url}>Repo Link</a>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
