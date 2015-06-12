<?php include("includes/header.php"); ?>

    <main id="content" class="main js-pageTransition" role="main">

        <div class="hero hero--fixed hero--pattern js-sectionFull">
            <div class="hero__content">
                <div class="wrapper">
                    <div class="text-group text-center">
                        <div class="h3 text-white">This is Gramophone</div>
                        <p class="text-white"><span class="text-italic">Gramophone</span> is a front-end boilerplate that utilizes Grunt, Sass, jQuery, PHP, susy and more. Below you'll find examples &amp; HTML markup for the components in this boilerplate. <span class="text-italic"><span class="">Coming soon:</span> Javascript functions will be available to grab from here rather than having an all inclusive js file. More modules will be added to go along with these building blocks. Utility classes and mixin markup will be documented.</span></p>
                        <div class="text-group__ft">
                            <a class=" btn btn--light" href="http://gramophone.roztocki.com/" target="_blank">Get started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="wrapper section">

            <div class="revolver js-revolver" id="revolver1">
                <ul class="revolver__slides">
                    <li>
                        <figure class="revolver__media">
                            <img src="https://placeimg.com/1024/620/nature/grayscale" alt="FPO">
                        </figure>
                    </li>
                    <li>
                        <figure class="revolver__media">
                            <img src="https://placeimg.com/1024/300/arch/grayscale" alt="FPO">
                        </figure>
                    </li>
                    <li>
                        <figure class="revolver__media">
                            <img src="https://placeimg.com/1024/620/animals/grayscale" alt="FPO">
                        </figure>
                    </li>
                    <li>
                        <figure class="revolver__media">
                            <img src="https://placeimg.com/1024/100/arch/grayscale" alt="FPO">
                        </figure>
                    </li>
                </ul>
                <footer class="revolver-controls">
                    <div class="revolver-controls__simple">
                        <div class="js-revolve-prev">
                            <span>Prev</span>
                            <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shape-arrow-left"></use></svg>
                        </div>
                        <div class="js-revolve-next">
                            <span>Next</span>
                            <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shape-arrow-right"></use></svg>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

<?php include("includes/footer.php"); ?>