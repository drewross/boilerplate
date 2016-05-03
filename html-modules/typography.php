<article class="section section--border" id="typography">
    <header class="section__hd">
        <h3 class="h-lg">Typography</h3>
    </header>
    
    <div class="text-group">
        <p><span class="text-italic">Philosophy:</span> set the base heading and paragraph styles under the classes <span class="inline-code">hdg</span> &amp; <span class="inline-code">para</span> mixins respectively. From there you can extend those classes for variations in font size, line-height, color, etc...</p>
        <p>For example: <span class="inline-code">.h1</span>, <span class="inline-code">.h2</span>, <span class="inline-code">.h3</span>, <span class="inline-code">.p-lg</span>, <span class="inline-code">.p-sm</span></p>
    </div>

    <div class="module">
        <div class="module__display">
            <div class="section section--flush-top">
                <div class="text-group">
                    <div class="h1">Headline 1</div>
                    <div class="h2">Headline 2</div>
                    <div class="h3">Headline 3</div>
                    <div class="h4">Headline 4</div>
                    <div class="h5">Headline 5</div>
                    <div class="h6">Headline 6</div>
                </div>
            </div>
            <div class="section section--short section--flush-top">
                <div class="text-group">
                    <p class="p p-lg">
                        Paragraph LARGE - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p class="p">
                        Paragraph - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p class="p p-sm">
                        Paragraph SMALL - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>

<pre><code class="language-markup">
<!-- Headings -->
<div class="h1">Headline 1</div>
<div class="h2">Headline 2</div>
<div class="h3">Headline 3</div>
<div class="h4">Headline 4</div>
<div class="h5">Headline 5</div>
<div class="h6">Headline 6</div>

<!-- Paragraph Styles -->
<p class="p p-lg">Paragraph LARGE - Lorem ipsum dolor sit ...</p>
<p class="p">Paragraph - Lorem ipsum dolor sit ...</p>
<p class="p p-sm">Paragraph SMALL - Lorem ipsum dolor sit ...</p>
</code></pre>
    </div>
</article>