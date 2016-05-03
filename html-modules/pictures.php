<article class="section section--border" id="pictures">
    <header class="section__hd">
        <h3 class="h-lg">Responsive Images</h3>
    </header>
    
    <p><span class="text-italic">Usage:</span> Load different quality/ size images for different breakpoints</p>

    <div class="module">
        <div class="module__display">
            <div class="row">
                <div class="col--md--6">
                    <picture>
                        <source
                        media="(min-width: 1450px)" 
                        srcset="http://placehold.it/920x680&amp;text=xLarge+non-retina,
                                http://placehold.it/1380x1020&amp;text=xLarge+retina 2x">
                       <source
                        media="(min-width: 600px)" 
                        srcset="http://placehold.it/461x340&amp;text=non-retina,
                                http://placehold.it/920x680&amp;text=retina 2x">

                       <img src="http://placehold.it/461x340&amp;text=default+smallest+size" alt="This picture loads on non-supporting browsers.">
                    </picture>
                </div>
            </div>
        </div>

<pre><code class="language-markup">
<picture>
    <source
    media="(min-width: 1450px)" 
    srcset="http://placehold.it/920x680&amp;text=xLarge+non-retina,
            http://placehold.it/1380x1020&amp;text=xLarge+retina 2x">
   <source
    media="(min-width: 600px)" 
    srcset="http://placehold.it/461x340&amp;text=non-retina,
            http://placehold.it/920x680&amp;text=retina 2x">
   <img src="http://placehold.it/461x340&amp;text=default+smallest+size" alt="This picture loads on non-supporting browsers.">
</picture>
</code></pre>

    </div>
</article>