
function makeOpaque(elem) {
	elem.classList.add("opaque");
}
function none(elem) {
	elem.classList.add("opaque");
	 document.getElementById("grapes").style.display = "none";
}
function changeColor(elem){
	
	document.getElementById('wow').style.backgroundColor = "rasberry";
}
function changeImage(){
	 document.getElementById('wow').src = "image/takoyaki.png";
	
}
function cursor() {
  document.getElementById("bottle").style.cursor = "alias";
}
//https://www.w3schools.com/howto/howto_css_modals.asp
// JavaScript popup window function
function basicPopup(url) {
popupWindow = window.open(url,'popUpWindow','height=300,width=700,left=50,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
	}
	

/*
function changeImage2(){
	 document.getElementById('wow').src = "image/takoyaki.png";
	 makeOpaque(elem);
	 none(elem);
}
function changeImage3(){
	 document.getElementById('wow').src = "image/takoyaki.png";
	 makeOpaque(elem);
	 none(elem);
}
function changeImage4(){
	 document.getElementById('wow').src = "image/takoyaki.png";
	 makeOpaque(elem);
	 none(elem);
}
function changeImage5(){
	 document.getElementById('wow').src = "image/takoyaki.png";
	 makeOpaque(elem);
	 none(elem);
}
function changeImage6(){
	 document.getElementById('wow').src = "image/takoyaki.png";
	 makeOpaque(elem);
	 none(elem);
}
function changeImage7(){
	 document.getElementById('wow').src = "image/takoyaki.png";
	 makeOpaque(elem);
	 none(elem);
}
function changeImage8(){
	 document.getElementById('wow').src = "image/takoyaki.png";
	 makeOpaque(elem);
	 none(elem);
}
function changeImage9(){
	 document.getElementById('wow').src = "image/takoyaki.png";
	 makeOpaque(elem);
	 none(elem);
}
function changeImage10(){
	 document.getElementById('wow').src = "image/takoyaki.png";
	 makeOpaque(elem);
	 none(elem);
}
function changeImage11(){
	 document.getElementById('wow').src = "image/takoyaki.png";
	 makeOpaque(elem);
	 none(elem);
}
function changeImage12(){
	 document.getElementById('wow').src = "image/takoyaki.png";
	 makeOpaque(elem);
	 none(elem);
}
function changeImage13(){
	 document.getElementById('wow').src = "image/takoyaki.png";
	 makeOpaque(elem);
	 none(elem);
}
function changeImage14(){
	 document.getElementById('wow').src = "image/takoyaki.png";
	 makeOpaque(elem);
	 none(elem);
}
function changeImage15(){
	 document.getElementById('wow').src = "image/takoyaki.png";
	 makeOpaque(elem);
	 none(elem);
}
function changeImage16(){
	 document.getElementById('wow').src = "image/takoyaki.png";
	 makeOpaque(elem);
	 none(elem);
}
/*having popup window issues + */

/* or for a centered popup
var popupWindow = null;
function centeredPopup(url,winName,w,h,scroll){
LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
settings =
'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
popupWindow = window.open(url,winName,settings) 
HTML
<p><a href="https://www.quackit.com/javascript/examples/sample_popup.cfm" onclick="centeredPopup(this.href,'myWindow','700','300','yes');return false">text</a></p>*/
/*function show(){
var stats =  document.getElementById("aa").style.display;
  
if (stats == "none"){  
document.getElementById("aa").style.display = "inline-block";
} else {
document.getElementById("aa").style.display = "none";  
}
}
body {
height: 100%;
background: honeydew;
}

#aa {  
  font-weight: bold;
  position:fixed;
  left:0;
  right:0;
  margin: auto;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100px;
  height: auto;
  padding: 15px;  
  background: gold;
  text-align: center;
  box-sizing: content-box;
  border: 4px dashed black;
}

button {
  margin-right: 10px;
  float: left;
  color: white;
  background: crimson; 
  padding: 15px;
}

#text {
  text-align: justify;
    -webkit-column-count: 3; /* Chrome, Safari, Opera */
    //-moz-column-count: 3; /* Firefox */
   /* column-count: 3;
}
<div id=text><button onClick=show()>click</button> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam nibh. Nunc varius facilisis eros. Sed erat. In in velit quis arcu ornare laoreet. Curabitur adipiscing luctus massa. Integer ut purus ac augue commodo commodo. Nunc nec mi eu justo tempor consectetuer. Etiam vitae nisl. In dignissim lacus ut ante. Cras elit lectus, bibendum a, adipiscing vitae, commodo et, dui. Ut tincidunt tortor. Donec nonummy, enim in lacinia pulvinar, velit tellus scelerisque augue, ac posuere libero urna eget neque. Cras ipsum. Vestibulum pretium, lectus nec venenatis volutpat, purus lectus ultrices risus, a condimentum risus mi et quam. Pellentesque auctor fringilla neque. Duis eu massa ut lorem iaculis vestibulum. Maecenas facilisis elit sed justo. Quisque volutpat malesuada velit.</div>
<div id=aa style="display:none">CONTENT</div>

html {
  width: 100%;
  height: 100%;  
  background: lavender;
  text-align: center;
  font-family: arial, sans-serif;
}

input { 
  display: none;
}

#target { 
  display: none;
}

#click:checked ~ label > #target {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: auto;
  display: inline-block;
  height: 80%;
  width: 80%;
  background: url('http://i.imgur.com/bv80Nb7.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  outline: 6px double teal;
}

.item {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;  
  user-select: none;
  -webkit-user-select: none;  
}

#warning {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left:0;
  right:0;
  margin: auto;
}
<input type="checkbox" id="click" name="click" value="click" />

<label for="click">
<p class="item"><b>CLICK HERE</b></p>
<div id=target class="item"><h1 id=warning>THE POP-UP CONTENT</h1></div>  
</label>*/