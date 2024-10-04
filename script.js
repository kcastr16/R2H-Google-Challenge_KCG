/* Gets the input from the user */
function handleSubmit() {
  let search = document.getElementById("search-input").value;
  if (search) {
    var url = 'https://www.google.com/search?q=' + encodeURIComponent(search);
    window.open(url);
  }
}