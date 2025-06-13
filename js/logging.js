const rosoutListener = new ROSLIB.Topic({
    ros: ros,
    name: '/rosout',
    messageType: 'rcl_interfaces/msg/Log'
  });
  
  rosoutListener.subscribe((message) => {
    const line = `[${message.level}] ${message.name}: ${message.msg}`;
    document.getElementById('rosoutOutput').textContent += line + '\n';
  });
  