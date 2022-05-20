const films = require("./models/ghiblifilms.json");

const express = require("express");
const app = express();

app.use(express.json());

app.listen(8080, () => {
  console.log("Server is on port 8080!");
});

//TO RETURN ALL THE FILMS

app.get("/films", (request, response) => {
  response.status(200).send(films);
});

//TO RETURN A FILM BY ID

app.get("/films/:id", (request, response) => {
  const idRequest = request.params.id;

  const filmById = films.find((film) => film.id == idRequest);

  response.status(200).send(filmById);
});

//TO RETURN A FILM BY TITLE OR DIRECTOR

app.get("/film/filter", (request, response) => {
  let payload;
  const titleRequest = request.query.title;
  const directorRequest = request.query.director;

  if (request.query.title) {
    payload = films.filter((film) =>
      film.title.toLowerCase().includes(titleRequest)
    );
  } else {
    payload = films.filter((film) =>
      film.director.toLowerCase().includes(directorRequest)
    );
  }
  console.log(payload);
  response.status(200).send(payload);
});

// TO ADD A NEW FILM

app.post("/films", (request, response) => {
  const newFilm = {
    id: films.length + 1,
    title: request.body.title,
    original_title: request.body.original_title,
    original_title_romanised: request.body.original_title_romanised,
    description: request.body.description,
    director: request.body.director,
    producer: request.body.producer,
    release_date: request.body.release_date,
    running_time: request.body.running_time,
  };

  films.push(newFilm);

  response.status(201).json([
    {
      mensage: "New film added.",
      newFilm,
    },
  ]);
});
