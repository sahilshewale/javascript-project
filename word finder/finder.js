document.getElementById('searchButton').addEventListener('click', function() {
  var inputText = document.getElementById('inputText').value;
  var searchWord = document.getElementById('searchWord').value;
  var regex = new RegExp("\\b" + searchWord + "\\b", "gi");
  var matches = inputText.match(regex);

  if (matches) {
    document.getElementById('result').innerHTML = "The word '" + searchWord + "' was found " + matches.length + " time(s).";
  } else {
    document.getElementById('result').innerHTML = "The word '" + searchWord + "' was not found.";
  }
});

document.getElementById('replaceButton').addEventListener('click', function() {
  var inputText = document.getElementById('inputText').value;
  var searchWord = document.getElementById('searchWord').value;
  var replaceWord = document.getElementById('replaceWord').value;
  var regex = new RegExp("\\b" + searchWord + "\\b", "gi");
  var replacedText = inputText.replace(regex, replaceWord);

  document.getElementById('result').innerHTML = replacedText;
});
