function StartSocket() {

  var socket = io('wss://echo.websocket.org/');
  DotNet.invokeMethod('BlazorSocketIO', 'PrintEchoFromJs', "Connecting with SocketIO");
  socket.on('connect', function(){


  });
  socket.on('event', function(data){

    DotNet.invokeMethod('BlazorSocketIO', 'PrintEchoFromJs', data.toString());

  });
  socket.on('disconnect', function(){});

}