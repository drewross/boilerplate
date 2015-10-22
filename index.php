<?php include("includes/header.php"); ?>

    <main id="content" class="main fadeIn">

        <div class="hero hero--fixed js-sectionFull">
            <img src="build/images/gramophone-logo-mark.jpg" alt="Gramophone, a front end boilerplate" />
            <div class="hero__content">
                <div class="wrapper">
                    <div class="text-group text-center fadeIn">
                        <a class=" btn btn--light" href="http://gramophone.roztocki.com/" target="_blank">get started</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="owl-carousel">
            <div class="item">
                <div class="item__content">
                    <div class="h2">Slide 1</div>
                </div>
                <img src="//placeimg.com/1400/500/tech" alt="FPO" />
            </div>
            <div class="item">
                <div class="item__content">
                    <div class="h2">Slide 2</div>
                </div>
                <img src="//placeimg.com/1400/500/nature" alt="FPO" />
            </div>
            <div class="item">
                <div class="item__content">
                    <div class="h2">Slide 3</div>
                </div>
                <img src="//placeimg.com/1400/500/arch" alt="FPO" />
            </div>
        </div>


        <div class="modal" id="ipsum-modal">
            <div class="modal__close" data-click-target="ipsum-modal" data-click-bodyClass="modalIsActive">
                <div>
                    <p class="sr-only">Close Modal</p>
                    <svg><use xlink:href="#shape-close"></use></svg>
                </div>
            </div>
            <div class="modal__hd">
                <h4 class="h5">Placeholder text</h4>
            </div>
            <div class="modal__bd">
                <div class="text-group">
                    <p class="p p-sm">Pellentesque molestie erat vitae egestas placerat. Duis sodales tristique elit, a gravida sem. Etiam ut mattis augue. Integer malesuada volutpat quam non semper. Morbi vel placerat dui. Vivamus in ultrices nulla.</p>

                    <p class="p p-sm">Ut efficitur odio nunc, sed cursus odio imperdiet non. Quisque vitae nibh nulla. Nam quis lectus id quam egestas fermentum vitae sit amet est. Etiam tincidunt tristique tortor ultrices blandit. Suspendisse malesuada, lacus eget porta mattis, orci lectus blandit arcu, et aliquam ex lectus a metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas eros augue, aliquam ac ante ac, vulputate faucibus ipsum.</p>

                    <p class="p p-sm">In tellus quam, sollicitudin quis purus nec, finibus vehicula nulla. Cras eu diam efficitur, pretium lorem eget, gravida risus. In hac habitasse platea dictumst. Sed quis risus imperdiet, maximus ante eu, tincidunt ex. Suspendisse tortor libero, finibus sed maximus quis, dictum vitae urna. Donec eu dignissim nulla, rhoncus eleifend odio. Maecenas pretium bibendum est, sit amet faucibus justo convallis vel.</p>
                </div>
            </div>
        </div>

<?php include("includes/footer.php"); ?>