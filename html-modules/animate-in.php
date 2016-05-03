<article class="section section--border" id="animate-in">
    <header class="section__hd">
        <h3 class="h-lg">Animate In</h3>
    </header>
    <div class="text-group">
        <p class="text-italic">Usage: animating elements when they hit the viewport</p>
        <p>Make elements animate in by adding <span class="inline-code">data-animate-in="animationDirectionHere"</span> to an element.</p>
    </div>

    <div class="section section--short section--flush-bottom">
        <div class="text-group">
            <div class="h5 text-group__hd">Notes:</div>
            <ul class="vList vList--bullets">
                <li><p class="p-sm">Current Values include: <span class="inline-code">up, down, left, right, fadeIn</span></p></li>
                <li><p class="p-sm">You can add custom animations by plugging a new value to the <span class="inline-code">data-animate-in=""</span> attribute. Just add your new effect in the <span class="inline-code">_animateIn.scss</span> file.</p></li>
            </ul>
        </div>
    </div>

    <div class="module">
        <div class="module__display">
            <div class="row">
                <div class="col--sm--6 col--md--2  patternLibrary">
                    <div data-animate-in="up">Up</div>
                </div>
                <div class="col--sm--6 col--md--2  patternLibrary">
                    <div data-animate-in="down">Down</div>
                </div>
                <div class="col--sm--6 col--md--2  patternLibrary">
                    <div data-animate-in="left">Left</div>
                </div>
                <div class="col--sm--6 col--md--2  patternLibrary">
                    <div data-animate-in="right">Right</div>
                </div>
                <div class="col--sm--6 col--md--2  patternLibrary">
                    <div data-animate-in="fadeIn">Fade In</div>
                </div>
            </div>
        </div>

<pre><code class="language-markup">
<div data-animate-in="up">Up</div>
<div data-animate-in="down">Down</div>
<div data-animate-in="left">Left</div>
<div data-animate-in="right">Right</div>
<div data-animate-in="fadeIn">Fade In</div>
</code></pre>
    </div>
</article>