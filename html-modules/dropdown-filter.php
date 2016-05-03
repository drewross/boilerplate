<article class="section section--border">
    <header class="section__hd">
        <h3 class="h-lg">Dropdown Filter</h3>
    </header>
    <div class="text-group">
        <p class="text-italic">Usage: filtering content</p>
        <p><span class="text-italic">Note:</span> this module uses the <span class="inline-code">data-click-group</span> attribute.</p>
    </div>
    <div class="module">
        <div class="module__display">
            <div id="dropdownFilter" class="dropdown" data-click-target="dropdownFilter">
                <div class="dropdown__icon">
                    <svg width="16px" height="8px"><use xlink:href="#shape-arrow-down"></use></svg>
                </div>
                <ul class="dropdown__list">
                    <li class="is-active" data-click-group="dd"><span>Choose one...</span></li>
                    <li data-click-group="dd"><span>Option 1</span></li>
                    <li data-click-group="dd"><span>Option 2</span></li>
                    <li data-click-group="dd"><span>Option 3</span></li>
                </ul>
            </div>
        </div>
<pre><code class="language-markup">
<div id="dropdownFilter-demo" class="dropdown" data-click-target="dropdownFilter-demo">
    <div class="dropdown__icon">
        <svg width="16px" height="8px"><use xlink:href="#shape-arrow-down"></use></svg>
    </div>
    <ul class="dropdown__list">
        <li class="is-active" data-click-group="dd"><span>Choose one...</span></li>
        <li data-click-group="dd"><span>Option 1</span></li>
        <li data-click-group="dd"><span>Option 2</span></li>
        <li data-click-group="dd"><span>Option 3</span></li>
    </ul>
</div>
</code></pre>
    </div>
</article>
