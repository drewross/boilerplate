<article class="section section--border" id="catch-on-top">
    <header class="section__hd">
        <h3 class="h-lg">Catch On Top</h3>
    </header>
    <div class="text-group">
        <p class="text-italic">Usage: Making things stick to the top of browser on scroll</p>
        <p>Make things stick to the top of the browser on scroll by adding the <span class="inline-code">data-is-sticky</span> attribute to an element. This will detect the elements current position in the document, and when the element reaches the top of the browser, it will become sticky.</p>
    </div>

    <div class="section section--short section--flush-bottom">
        <div class="text-group">
            <div class="h5 text-group__hd">Notes:</div>
            <ul class="vList vList--bullets">
                <li><p class="p-sm">Requires the use of the class <span class="inline-code">.stickToTop</span> as a child of the element with the <span class="inline-code">data-is-sticky</span> attribute.</p></li>
                <li><p class="p-sm">Use padding to adjust the distace from the top of the screen.</p></li>
                <li><p class="p-sm">To make an element sticky after a certain breakpoint add <span class="inline-code">.stickToTop--after--[breakpoint]</span></p></li>
            </ul>
        </div>
    </div>

    <div class="module">
<pre><code class="language-markup">
<div data-is-sticky="true">
    <div class="stickToTop">
        <p>Make Me Sticky</p>
    </div>
</div>
</code></pre>
    </div>

</article>