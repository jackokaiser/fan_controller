FAN_SPEED_OUT = B3;

fanSpeed = 0;
nSpeed = 3;

setWatch(function(e) {
	fanSpeed = (fanSpeed + 1) % (nSpeed + 1);
	analogWrite(FAN_SPEED_OUT, fanSpeed / nSpeed);
	console.log("Changing fan speed to "+fanSpeed);
}, BTN1, { repeat: true, edge: 'rising' });
// you'll need to use  edge: 'falling' if you connected the button to 0v
