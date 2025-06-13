window.ros = new ROSLIB.Ros({
    url: 'ws://100.115.145.61:9090'
  });
  
  ros.on('connection', () => {
    console.log('[ROS] Connected');
    document.getElementById('chatterOutput').textContent += 'Connected\n';
  });
  
  ros.on('error', (error) => {
    console.error('[ROS] Error:', error);
    document.getElementById('chatterOutput').textContent += 'Error\n';
  });
  
  ros.on('close', () => {
    console.log('[ROS] Closed');
    document.getElementById('chatterOutput').textContent += 'Closed\n';
  });
  