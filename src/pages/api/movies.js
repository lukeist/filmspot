import axios from "axios";

export default async (req, res) => {
  const { search } = req.query;

  const options = {
    method: "GET",
    url: "https://movie-database-alternative.p.rapidapi.com/",
    params: { s: search, r: "json", page: "1" },
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
};
