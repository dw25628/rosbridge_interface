const ctx = document.getElementById('velocityChart').getContext('2d');
const velData = {
  labels: [],
  datasets: [{
    label: '/cmd_vel.linear.x',
    data: [],
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const chart = new Chart(ctx, {
  type: 'line',
  data: velData,
  options: {
    scales: {
      x: {
        title: { display: true, text: 'Time' }
      },
      y: {
        title: { display: true, text: 'Velocity (m/s)' },
        suggestedMin: -2,
        suggestedMax: 2
      }
    }
  }
});

const velListener = new ROSLIB.Topic({
  ros: ros,
  name: '/cmd_vel',
  messageType: 'geometry_msgs/msg/Twist'
});

const maxPoints = 100;

velListener.subscribe((msg) => {
  const time = new Date().toLocaleTimeString();
  velData.labels.push(time);
  velData.datasets[0].data.push(msg.linear.x);

  if (velData.labels.length > maxPoints) {
    velData.labels.shift();
    velData.datasets[0].data.shift();
  }

  chart.update();
});
