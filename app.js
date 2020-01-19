const express = require('express')
const app = express()
const port =process.env.PORT;
let x=1;
app.use(express.static('audio'));
app.get('/', (req, res) => {
	
	x++
	
	

	
	if( (Math.floor(Math.random()*10))%2==0 )
res.send(` <meta name="viewport" content="width=device-width, initial-scale=1.0">Best OF Luck For Exam GLS...... :}<br><br> <audio id="aud" autoplay>
  <source src="audio1.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
<br>
<input placeholder="Entername your Name:" style="width:100%; height:30px; text-align:center">
<br><br>
<button style="background:green; border:0; width:100%; height:30px; paddin:0 20px; " onclick="fun()"><i style="color:white">Submit</i></button>
<script>
function fun(){
	document.querySelector("#aud").play();
}
</script>

`);
else
res.send(` <meta name="viewport" content="width=device-width, initial-scale=1.0">Best OF Luck For Exam GLS...... :}<br><br> <audio id="aud" autoplay>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
<br>
<input placeholder="Entername your Name:" style="width:100%; height:30px; text-align:center">
<br><br>
<button style="background:green; border:0; width:100%; height:30px; paddin:0 20px; " onclick="fun()"><i style="color:white">Submit</i></button>
<script>
function fun(){
	document.querySelector("#aud").play();
}
</script>

`);	
	
	
})
app.get("/count",(req,res)=>{
	res.send("Counter:"+x);
	
})

app.listen(port, () => console.log(`Example apps listening on port ${port}!`))