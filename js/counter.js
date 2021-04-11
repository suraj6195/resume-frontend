function updateCounter(){
    fetch("https://ozndhvaxki.execute-api.us-east-1.amazonaws.com/Prod/visitor-count/")
      .then(response => response.text())
      .then((body) => {
        var obj = JSON.parse(body);
        document.getElementById("counter").innerHTML=obj.visitorCount
      })
      .catch(function(error) {
        console.log(error); 
      });  
    }  
