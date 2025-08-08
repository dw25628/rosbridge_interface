const velListener = new ROSLIB.Topic({
  ros: ros,
  name: '/lvx_client/gsof/velocity_8',
  messageType: 'gsof_msgs/msg/Velocity8'
});

const ackermannOdomListener = new ROSLIB.Topic({
  ros: ros,
  name: '/ackermann_steering_controller/odometry',
  messageType: 'nav_msgs/msg/Odometry'
});

velListener.subscribe((message) => {
  document.getElementById('GpsSpeed').textContent = (message.velocity * 2.237).toFixed(2);
  document.getElementById('heading').textContent = message.heading.toFixed(1);
});

ackermannOdomListener.subscribe((message) => {
  document.getElementById('wheelSpeed').textContent = (message.twist.twist.linear.x * 2.237).toFixed(2);
});