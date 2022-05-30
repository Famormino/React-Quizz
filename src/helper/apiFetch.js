function apiFetch() {
  const API_URL = "https://opentdb.com/api.php?amount=2&type=multiple";

  return fetch(API_URL)
    .then((res) => res.json())
    .then((data) => data.results);
}

export default apiFetch;
