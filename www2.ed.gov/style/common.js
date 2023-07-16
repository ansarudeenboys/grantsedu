<!-- Start common.jsx -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="x-ua-compatible" content="IE=edge" >
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- CSS -->
    <link href="/style/ed-bootstrap.css" rel="stylesheet">
    <link href="/style/common.css" rel="stylesheet">
<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
  <script src="/style/html5shiv.js"></script>
  <script src="/style/respond.min.js"></script>
<![endif]-->
<script type="text/javascript" src="/style/jquery.js"></script>
<script src="/style/bootstrap.min.js"></script>

<script type="text/javascript">
var browser = browserDetect();
function browserDetect()  {
	ns4 = (document.layers)&&(navigator.appName=="Netscape")&&(parseInt(navigator.appVersion)==4) ? 'ns4' : false;
	ie4 = (document.all)&&(navigator.appName.indexOf("Microsoft") > -1)&&(parseInt(navigator.appVersion)==4)&&(navigator.appVersion.indexOf('MSIE 6') <0) ? 'ie4' : false;
	ie5 = (document.getElementById)&&(navigator.appName.indexOf("Microsoft") > -1)&&(navigator.appVersion.indexOf('MSIE 6') <0) ? 'ie5' : false;
	ie6 = (document.getElementById)&&(navigator.appName.indexOf("Microsoft") > -1)&&(navigator.appVersion.indexOf('MSIE 6') >=0) ? 'ie6' : false;
	ns6 = (document.getElementById)&&(navigator.appName=="Netscape")&&(parseInt(navigator.appVersion)>4) ? 'ns6' : false;
	return (ns4 || ie5 || ie4 || ns6 || ie6);
}
var browser = browserDetect();


function popWin(theURL,winName,features) {	

  var mywin = window.open(theURL,winName,features);
  mywin.focus();
}

/*-- image rollover for program/office bubble --*/

function imgRoll(img, state) {
	
	if (document.images[img].src.indexOf('_on.gif') == -1) {
		(state) ? document.images[img].src = eval(img + '_over.src') : document.images[img].src = eval(img + '_off.src');
	
	}
}
</script>
<script async type="text/javascript" id="_fed_an_ua_tag" src="https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency=ED"></script>
<!-- End common.js -->