//JQuery code for images to fit a div
$(document).ready(function(){
    imageWidth = $('.column_b img').width();
    parentWidth = $('.main').width();
    if (imageWidth > parentWidth) {
        $('.column_b').css('width', '100%');
    }
});

function makeOpaque(elem) {
	elem.classList.add("opaque");
}
// JavaScript popup window function
	function basicPopup(url) {
popupWindow = window.open(url,'popUpWindow','height=300,width=700,left=50,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
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