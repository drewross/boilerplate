<article class="section section--border" id="heros">
    <header class="section__hd">
        <h3 class="h-lg">Heros</h3>
    </header>
    <div class="text-group">
        <p class="text-italic">Usage: large images with vertically centered content</p>
        <p>By default hero image heights are based off the height of the image. You can add the class <span class="inline-code">hero--fixed</span> to set the height manually. <span class="text-italic">In this case the image will be centered vertically and horizontally inside the space.</span></p>
    </div>

    <div class="module">
        <div class="hero hero--fixed">
            <figure class="hero__img">
                <img src="https://placeimg.com/1680/864/nature/grayscale" alt="Placeholder" />
            </figure>
            <div class="hero__content">
                <div class="wrapper">
                    <div class="text-group">
                        <div class="h1 text-white">Heros</div>
                        <p class="text-italic text-white">vertically centered content</p>
                    </div>
                </div>
            </div>
        </div>
<pre><code class="language-markup">
<!-- Default -->
<div class="hero">
    <figure class="hero__img">
        <img src="https://placeimg.com/1680/864/nature/grayscale" alt="Placeholder" />
    </figure>
    <div class="hero__content">
        <h2 class="h1">Vertically centered text here</h2>
    </div>
</div>

<!-- Fixed Height -->
<div class="hero hero--fixed">
    <figure class="hero__img">
        <img src="https://placeimg.com/1680/864/nature/grayscale" alt="Placeholder" />
    </figure>
    <div class="hero__content">
        <div class="h1">Vertically centered text here</div>
    </div>
</div>
</code></pre>
    </div>
</article>
