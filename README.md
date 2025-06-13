Rosbridge with minimal talker node



ros2 run demo_nodes_cpp talker
ros2 run rosbridge_server rosbridge_websocket

vermeer@vermeer-Precision-7530:~/custom_web_interface$ python3 -m http.server 8000


In browser
http://localhost:8000/index.html


Had issues with foxglove bridge due to messages being in CDR format# rosbridge_interface
