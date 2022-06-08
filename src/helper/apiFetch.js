function apiFetch() {
  const API_URL = "https://opentdb.com/api.php?amount=3&type=multiple";

  return fetch(API_URL)
    .then((res) => res.json())
    .then((data) => data.results);
}

export default apiFetch;
