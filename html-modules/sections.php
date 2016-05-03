<article class="section section--border" id="sections">
    <header class="section__hd">
        <h3 class="h-lg">Sections</h3>
    </header>
    <p class="text-italic">Usage: vertical spacing</p>

    <div class="section section--short section--flush-bottom">
        <div class="text-group">
            <div class="h5">Extensions:</div>
            <ul class="vList vList--bullets">
                <li><p class="p-sm"><span class="inline-code">js-sectionFull</span> This will make the the section the height of the browser window (fluid)</p></li>
                <li><p class="p-sm"><span class="inline-code">section--tall</span> for taller sections</p></li>
                <li><p class="p-sm"><span class="inline-code">section--short</span> for shorter sections</p></li>
                <li><p class="p-sm"><span class="inline-code">section--flush-top</span> removes top padding</p></li>
                <li><p class="p-sm"><span class="inline-code">section--flush-bottom</span> removes bottom padding</p></li>
            </ul>
        </div>
    </div>

    <div class="module">
        <div class="module__display">
            <div class="row patternLibrary-sections">
                <div class="col--sm--4">
                    <div class="section section--tall">
                        <div>Section Tall</div>
                    </div>
                </div>
                <div class="col--sm--4">
                    <div class="section">
                        <div>Section</div>
                    </div>
                </div>
                <div class="col--sm--4">
                    <div class="section section--short">
                        <div>Section Short</div>
                    </div>
                </div>
            </div>
        </div>

<pre><code class="language-markup">
<!-- Full Height Section -->
<div class="section js-sectionFull">
    section full
</div>

<!-- Tall Section -->
<div class="section section--tall">
    section tall
</div>

<!-- Default Section -->
<div class="section">
    section
</div>

<!-- Short Section -->
<div class="section section--short">
    section short
</div>
</code></pre>
    </div>
</article>