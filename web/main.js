function fetch() {
  query = location.search.replace('?l=' , '');

    var starCountRef = firebase.database().ref(query + '/url');
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
  console.log(data);
  if(data == null){
    window.open(' 404.html' , '_self')
  }else{    
  window.open(data , '_self')
  }
});
}