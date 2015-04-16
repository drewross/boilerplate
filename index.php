<?php include("includes/header.php"); ?>

<!-- Syntax Highlighter -->
<script type="text/javascript" src="syntaxHighlighter/prism.js"></script>

<script type="text/javascript">
$(function() {
    $('.language-markup').each(function() {
        var pre = $(this);
        pre.html(htmlEncode(pre.html()));
    });
});

function htmlEncode(value){ 
  return $('<div/>').text(value).html(); 
} 
</script>

    <div class="hero hero--light">
        <img src="https://placeimg.com/1680/864/nature" alt="Placeholder" />
        <div class="wrapper">
            <div class="hero__content">
                <div class="text-group">
                    
                </div>
            </div>
        </div>
    </div>

    <div class="wrapper" id="modules">

        <div class="row">
            <div class="col-sm-10">
                <!-- Typography Styles -->
                <?php include("modules/typography.php"); ?>


                <!-- Grid -->
                <?php include("modules/grids.php"); ?>


                <!-- Wrappers -->
                <?php include("modules/wrappers.php"); ?>


                <!-- Sections -->
                <?php include("modules/sections.php"); ?>


                <!-- Heros -->
                <?php include("modules/heros.php"); ?>


                <!-- Click Functions -->
                <?php include("modules/click-functions.php"); ?>


                <!-- Scroll To -->
                <?php include("modules/scroll-to.php"); ?>


                <!-- Dropdown w/ Links -->
                <?php include("modules/dropdown-links.php"); ?>
                

                <!-- Dropdown Filter -->
                <?php include("modules/dropdown-filter.php"); ?>
                

                <!-- Link Styles -->
                <?php include("modules/links.php"); ?>
                

                <!-- Media Object -->
                <?php include("modules/media-object.php"); ?>
                
                
                <!-- Horizontal List Styles -->
                <?php include("modules/h-lists.php"); ?>
                

                <!-- Veritcal List Styles -->
                <?php include("modules/v-lists.php"); ?>
                

                <!-- Definition List Styles -->
                <?php include("modules/d-lists.php"); ?>
                

                <!-- Tabs -->
                <?php include("modules/tabs.php"); ?>
                

                <!-- Layout Table Object -->
                <?php include("modules/l-table.php"); ?>


                <!-- Icons -->
                <?php include("modules/icons.php"); ?>
                

                <!-- Modal -->
                <?php include("modules/modal.php"); ?>
                

                <!-- Revolver Carousel -->
                <?php include("modules/carousel.php"); ?>
                

                <!-- Inline Styles -->
                <?php include("modules/inline-styles.php"); ?>
                

                <!-- Form Styles -->
                <?php include("modules/forms.php"); ?>
                

                <!-- Pagination -->
                <?php include("modules/pagination.php"); ?>
            </div>
            <div class="col-sm-2 ">
                <div class="section">
                    <?php include("includes/sidebar.php"); ?>
                </div>
            </div>
        </div>

    </div><!-- end main wrapper -->



<?php include("includes/footer.php"); ?>