<article class="section section--border" id="scroll-to">
    <header class="section__hd">
            <h3 class="h-lg">Scroll To functions</h3>
    </header>
    <div class="text-group">
        <p class="text-italic">Usage: smooth scrolling to elements</p>
        <p>Add scroll to events in your html markup by adding <span class="inline-code">data-scroll-to="targetIDhere"</span> to an element. By default, this will scroll to the element with that ID at a speed of 1000 of an offset of 0.
    </div>

    <div class="section section--short section--flush-bottom">
        <div class="text-group">
            <div class="h5 text-group__hd">Optional attributes include:</div>
            <ul class="vList vList--bullets">
                <li><p class="p-sm"><span class="inline-code">data-scroll-offset=""</span> requires a number value and will offset the element the equivalent of the entered value.</p></li>
                <li><p class="p-sm"><span class="inline-code">data-scroll-speed=""</span> requires a number value and will scroll to the element at the speed of the enntered value.</p></li>
            </ul>
        </div>
    </div>

    <div class="module">
        <div class="module__display">
            <div class="trigger btn" data-scroll-to="scroll-target" data-scroll-offset="24" data-scroll-speed="400">Trigger</div>
            <div class="section">
                <div id="scroll-target">Target</div>
            </div>
        </div>

<pre><code class="language-markup">
<div data-scroll-to="scroll-target-2" data-scroll-offset="24" data-scroll-speed="400">Trigger</div>
<div id="scroll-target-2">Target</div>
</code></pre>
    </div>
</article>