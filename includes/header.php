<!DOCTYPE html>
<html lang="en">
<head>
<!-- META DATA -->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">
<!--[if IE]><meta http-equiv="cleartype" content="on" /><![endif]-->

<title>Gramophone | Front end Boilerplate</title>

<!-- ICONS -->
<link rel="shortcut icon" type="image/ico" href="build/images/favicons/favicon.png" />
<link rel="apple-touch-icon" href="build/images/favicons/apple-touch-icon.png" />
<link rel="icon" href="build/images/favicons/android-favicon.png">

<!-- FONTS -->
<link href='https://fonts.gstatic.com' rel='preconnect' crossorigin>
<link href='http://fonts.googleapis.com/css?family=Playfair+Display|Karla:400,700,400italic' rel='stylesheet' type='text/css'>

<!-- CSS -->
<link rel="stylesheet" media="screen" href="build/css/production.min.css" />

<!-- JAVASCRIPT -->
<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="build/js/slick.js"></script>
<script type="text/javascript" src="build/js/production.min.js"></script>
<!--[if lte IE 9]>
<script type="text/javascript" src="build/js/timetravel.js"></script>
<![endif]-->

</head>
<body class="no-js" id="top">
<div class="is-hidden">
    <?php include("build/images/svgs/svgs.svg"); ?>
</div>


<?php
    // Detect Homepage
    $exactUrl = $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
    $domain = $_SERVER['SERVER_NAME'] . '/';
    $homepage = "/index.php";
    $currentpage = $_SERVER['REQUEST_URI'];
?>

<header class="site-header">
    <div class="wrapper">
        <h1 class="logo" itemscope itemtype="http://schema.org/Organization">
            <a href="index.php" itemprop="url">
                <span class="h3" itemprop="name">gramophone</span>
            </a>
            <span class="sr-only">A responsive front end boilerplate using grunt, sass, jquery, svgs &amp; more</span>
        </h1>
        <div class="burger" data-click-target="mainNav" data-click-bodyClass="mobile-menu-is-open">
            <div class="burger-inner">
                <span class="burger-top"></span>
                <span class="burger-middle"></span>
                <span class="burger-bottom"></span>
            </div>
        </div>
        <div class="site-header-panel">
            <nav class="site-navigation">
                <ul class="site-navigation-list">
                    <li data-click-target="ipsum-modal" data-click-bodyClass="modal-is-active"><span>I need Ipsum</span></li>
                    <li><a href="https://github.com/drewross/boilerplate" target="_blank">Github</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>

<main id="content" class="main fadeIn">
