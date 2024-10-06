/* Gets the input from the user by identifying the ID for the search-input. The users input is then stored and added to a URL, which completes a accurrate google search. */
function handleSubmit() {
  let search = document.getElementById("search-input").value;
  if (search) {
    var url = 'https://www.google.com/search?q=' + encodeURIComponent(search);
    window.open(url);
  }
}