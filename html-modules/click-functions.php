<article class="section section--border" id="click-functions">
    <header class="section__hd">
        <h3 class="h-lg">Click Functions</h3>
    </header>
    <div class="text-group">
        <p class="text-italic">Usage: adding state classes</p>
        <p>Add click events in your html markup by adding <span class="inline-code">data-click-target="targetIDhere"</span> to an element. By default, this will add the class <span class="inline-code">is-active</span> to the element with the targeted ID.</p>
    </div>

    <div class="section section--short section--flush-bottom">
        <div class="text-group">
            <div class="h5 text-group__hd">Optional attributes include:</div>
            <ul class="vList vList--bullets">
                <li><p class="p-sm"><span class="inline-code">data-click-bodyClass="mask"</span> toggles a class on the body. Useful for screens for targeting other elemets.</p></li>
                <li><p class="p-sm"><span class="inline-code">data-click-class="is-open"</span> allows you to add a custom state class to the target elements. This takes precedence over the default "is-active" class.</p></li>
                <li><p class="p-sm"><span class="inline-code">data-click-group="group-name"</span> can be used to toggle active state betweem objects. Just give the related elements the same value for the <span class="inline-code">data-click-group=""</span> attribute</p></li>
            </ul>
        </div>
    </div>

    <div class="module">
        <div class="module__display">
            <div class="btn" data-click-target="target" data-click-bodyClass="mask">Trigger</div>
            <div class="btn" id="target">Target</div>
        </div>

<pre><code class="language-markup">
<div data-click-target="click-target" data-click-bodyClass="mask">Trigger</div>
<div id="click-target">Target</div>
</code></pre>
    </div>

    <div class="module">
        <div class="module__display">
            <div class="btn is-active" data-click-group="group-1">Related Object 1</div>
            <div class="btn" data-click-group="group-1">Related Object 2</div>
        </div>
<pre><code class="language-markup">
<div class="is-active" data-click-group="group-1">Related Object 1</div>
<div data-click-group="group-1">Related Object 2</div>
</code></pre>

    </div>
</article>