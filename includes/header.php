 <!DOCTYPE html>
<html lang="en">
<head>
<!-- META DATA -->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--[if IE]><meta http-equiv="cleartype" content="on" /><![endif]-->

<title>PHDL | Boilerplate</title>

<!-- ICONS -->
<link rel="shortcut icon" type="image/ico" href="build/images/favicon.ico" />
<link rel="apple-touch-icon" href="build/images/apple-touch-icon.png" />

<!-- FONTS -->
<!-- <link href='http://fonts.googleapis.com/css?family=Libre+Baskerville:400,700,400italic' rel='stylesheet' type='text/css'> -->

<!-- CSS -->
<link rel="stylesheet" media="screen, projection" href="build/styles/production.css" />

<!-- JQUERY -->
<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

<!-- JAVASCRIPT -->
<script type="text/javascript" src="build/scripts/production.min.js"></script>


<!--[if lte IE 9]>
<script type="text/javascript" src="build/scripts/timetravel.js"></script>
<![endif]-->

</head>
<body class="no-js">
<?php include("build/images/svg-defs.svg"); ?>

<header class="globalHeader" role="banner">
    <div class="wrapper">
    	<h1 class="logo">
    		<a href="index.php">
    			Gramophone	
    		</a>
    		<span class="sr-only">Gramophone | A responsive front end boilerplate using grunt, sass, jquery, svgs &amp; more</span>
    	</h1>
        <div class="burger js-trigger" data-click-target="mainNav" data-click-bodyClass="mobileMenuIsOpen">
            <div class="burger-inner">
                <span class="burger-top"></span>
                <span class="burger-middle"></span>
                <span class="burger-bottom"></span>
            </div>
        </div>
    	<div class="globalHeader-panel" id="mainNav">
	        <nav class="globalNav" id="site-navigation" role="navigation">
	            <ul class="globalNav-list">
                    <!-- <li><a href="">Getting Started</a></li>
	            	<li><a href="">Docs</a></li>
	            	<li><a href="">Download</a></li> -->
	            	<li><a href="https://github.com/drewross/boilerplate" target="_blank">Github</a></li>
	            </ul>
	        </nav>
            <!-- <nav class="utilityNav" role="navigation">
                <ul class="utilityNav-list">
                    <li><a href="">Utility Item 1</a></li>
                    <li><a href="">Utility Item</a></li>
                </ul>
            </nav> -->
        </div>
    </div>
</header>
<div class="hdg-1 breakpointTester"></div>
<main id="content" class="main js-pageTransition" role="main">
