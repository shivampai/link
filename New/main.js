function paste(){
navigator.clipboard.readText()
  .then(text => {   
      document.getElementById("url").value = text;
})
  .catch(err => {
    window.confirm('Failed to read clipboard contents: ', err);
  });}
function save() {
    path = 'https://shivampai.github.io/link/web/?l=' + document.getElementById("path").value;
    savepath = document.getElementById("path").value;
    console.log(path)
    url = document.getElementById("url").value;
    firebase.database().ref('/' + savepath).set({
        url : url,
      });
      input = document.getElementById("hidden"); 
      input.value = path;
      input.style.display = 'block';
    }