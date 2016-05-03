<article class="section section--border" id="media-object">
    <header class="section__hd">
        <h3 class="h-lg">Media Object</h3>
    </header>
    <p class="text-italic">Usage: place text next to media</p>

    <div class="section section--short section--flush-bottom">
        <div class="text-group">
            <div class="h5">Extensions:</div>
            <ul class="vList vList--bullets">
                <li><p class="p-sm"><span class="inline-code">media-object--equalWidth</span> sets the media &amp; content each to 50% width</p></li>
                <li><p class="p-sm"><span class="inline-code">media-object--flip</span> floats the media to the right side. <span class="text-italic">Floats are used so the media can still be stacked on top on smaller screens.</span></p></li>
            </ul>
        </div>
    </div>

    <div class="module">
        <div class="module__display">
        
            <div class="media-object">
                <figure class="media-object__media">
                    <img src="https://placeimg.com/288/168/nature/grayscale" alt="FPO" />
                </figure>
                <div class="media-object__bd">
                    <p class="p p-sm">In cum quem corpora molestiae. Mazim vivendo sit ut. Eos natum sententiae intellegam te. Ea aperiri iracundia interesset mea, an his impetus definiebas. Solet populo eum no, pri etiam viris ut, vix ad quas saepe admodum. Sonet timeam ex qui, doctus dolores ex sed. Has ut mutat rationibus.</p>
                </div>
            </div>
        </div>

<pre><code class="language-markup">
<!-- Default -->
<div class="media-object media-object--equalWidth">
    <figure class="media-object__media">
        <img src="https://placeimg.com/288/168/nature/grayscale" alt="FPO" />
    </figure>
    <div class="media-object__bd">
        <p class="p p-sm">In cum quem corpora molestiae. ...</p>
    </div>
</div>

<!-- Flipped | Equal Width -->
<div class="media-object media-object--equalWidth media-object--flip">
    <figure class="media-object__media">
        <img src="https://placeimg.com/288/168/nature/grayscale" alt="FPO" />
    </figure>
    <div class="media-object__bd">
        <p class="p p-sm">In cum quem corpora molestiae. ...</p>
    </div>
</div>
</code></pre>

    </div>
</article>