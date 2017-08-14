console.log('Loaded!');
var button=document.getElementById('counter');

button.onclick=function(){
    
    var request= new XMLHttpRequest();
    
    //create new request object
    request.onreadystatchange=function(){
        
        if(request.readyState===XMLHttpRequest.DONE){
            
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
            }
        }
    }
    
   
   //make request
   request.open("GET","http://parvindersharma09.imad.hasura-app.io/counter",true);
   request.send(null);
}
