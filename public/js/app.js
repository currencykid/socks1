var socket = io(); 

socket.on('connect', function(){
	console.log('lawst in the sauce gucci');
});

socket.on('message', function(message){
	console.log("New message");
	console.log(message.text);
});
