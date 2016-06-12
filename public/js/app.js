var socket = io(); 

socket.on('connect', function(){
	console.log('lawst in the sauce gucci');
});

socket.on('message', function(message){
	console.log("New message");
	console.log(message.text);

	jQuery('.messages').append('<p>' + message.text +'</p>'); 
});

//handles new message submit

var $form = jQuery('#message-form'); 

$form.on('submit', function(event){
		//when u don't wanna submit by refreshing the page
		// using sockets so we can handle form submission on our own
	event.preventDefault();	

	var $message = $form.find('input[name=message]') ;

	socket.emit('message', {
		text: $message.val()
	});

	$message.val('');


});
