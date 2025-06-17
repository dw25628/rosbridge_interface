window.ros = new ROSLIB.Ros({
    // url: 'ws://localhost:9090'
    url: 'ws://'+window.location.hostname+':9090'
  });
  
  ros.on('connection', () => {
    console.log('[ROS] Connected');
    document.getElementById('rosoutOutput').textContent += 'Connected\n';
  });
  
  ros.on('error', (error) => {
    console.error('[ROS] Error:', error);
    document.getElementById('rosoutOutput').textContent += 'Error\n';
  });
  
  ros.on('close', () => {
    console.log('[ROS] Closed');
    document.getElementById('rosoutOutput').textContent += 'Closed\n';
  });
  