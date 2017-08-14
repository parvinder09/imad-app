console.log('Loaded!');
var button=document.getElementById('counter');

button.onclick=function(){
    
    var request= new XMLHttpRequest();
    
    //create new request object
    request.onreadystatchange=function(){
        console.log("new request");
        if(request.readyState===XMLHttpRequest.DONE){
            console.log("done");
            if(request.status===200){
                var counter=request.responseText;
                console.log('recieved response!');
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
                alert(counter.toString());
            }
        }
    }
    
   
   //make request
   request.open("GET","http://parvindersharma09.imad.hasura-app.io/counter",true);
   request.send();
}
