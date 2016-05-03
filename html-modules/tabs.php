<article class="section section--border" id="tabs">
    <header class="section__hd">
        <h3 class="h-lg">Tabs</h3>
    </header>
    <p class="text-italic">Usage: condense layouts </p>

    <div class="section section--short section--flush-bottom">
        <div class="text-group">
            <div class="h5">Extensions:</div>
            <ul class="vList vList--bullets">
                <li><span class="inline-code">tabs--3up</span> Tabs can be expanded with --[2-4]up to keep equal width tabs</li>
                <li><span class="inline-code">tabs--hThenV</span> switches to a vertical layout on smaller screens</li>
            </ul>
        </div>
    </div>
    <div class="module">
        <div class="module__display">
            <div class="row">
                <div class="col--sm--4">
                    <div class="testHdg2">Horizontal then Vertical Tabs</div>
                    <ul class="tabs tabs--3up tabs--hThenV">
                        <li class="is-active" data-click-group="tabs-1">
                            <div class="tab__tab">List Item 1</div>
                            <div class="tab__bd">Tabs Shift Target Container ONE</div>
                        </li>
                        <li data-click-group="tabs-1">
                            <div class="tab__tab">List Item 2</div>
                            <div class="tab__bd">Tabs Shift Target Container TWO</div>
                        </li>
                        <li data-click-group="tabs-1">
                            <div class="tab__tab">List Item 3</div>
                            <div class="tab__bd">Tabs Shift Target Container THREE Tabs Shift Target Container THREE Tabs Shift Target Container THREE Tabs Shift Target Container THREE Tabs Shift Target Container THREE</div>
                        </li>
                    </ul>
                </div>
                <div class="col--sm--4">
                    <div class="testHdg2">Horizontal Tabs</div>
                    <ul class="tabs tabs--3up">
                        <li class="is-active" data-click-group="tabs-2">
                            <div class="tab__tab">List Item 1</div>
                            <div class="tab__bd">Tabs Shift Target Container ONE</div>
                        </li>
                        <li data-click-group="tabs-2">
                            <div class="tab__tab">List Item 2</div>
                            <div class="tab__bd">Tabs Shift Target Container TWO</div>
                        </li>
                        <li data-click-group="tabs-2">
                            <div class="tab__tab">List Item 3</div>
                            <div class="tab__bd">Tabs Shift Target Container THREE</div>
                        </li>
                    </ul>
                </div>
                <div class="col--sm--4">
                    <div class="testHdg2">Vertical Tabs</div>
                    <ul class="tabs">
                        <li class="is-active" data-click-group="tabs-3">
                            <div class="tab__tab">List Item 1</div>
                            <div class="tab__bd">Tabs Shift Target Container ONE</div>
                        </li>
                        <li data-click-group="tabs-3">
                            <div class="tab__tab">List Item 2</div>
                            <div class="tab__bd">Tabs Shift Target Container TWO</div>
                        </li>
                        <li data-click-group="tabs-3">
                            <div class="tab__tab">List Item 3</div>
                            <div class="tab__bd">Tabs Shift Target Container THREE</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

<pre><code class="language-markup">
<ul class="tabs tabs--3up tabs--hThenV">
    <li class="is-active" data-click-group="tabs-1">
        <div class="tab__tab">List Item 1</div>
        <div class="tab__bd">Tabs Shift Target Container ONE</div>
    </li>
    <li data-click-group="tabs-1">
        <div class="tab__tab">List Item 2</div>
        <div class="tab__bd">Tabs Shift Target Container TWO</div>
    </li>
    <li data-click-group="tabs-1">
        <div class="tab__tab">List Item 3</div>
        <div class="tab__bd">Tabs Shift Target Container THREE</div>
    </li>
</ul>
</code></pre>
    </div>
</article>