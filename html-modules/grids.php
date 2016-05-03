<article class="section section--border" id="grids">
    <header class="section__hd">
        <h3 class="h-lg">Grid</h3>
    </header>
    <div class="text-group">
        <p class="text-italic">Usage: layouts</p>
        <p>Flexible, responsive grid system.</p>
        <p>Grid system should be wrapped with:</p>
    
<pre><code class="language-markup">
<div class="row">
    ...
</div>
</code></pre>
    </div>
    <div class="module">
        <div class="module__display">
            <div class="row">
                <div class="col--sm--2 patternLibrary">
                    <div>2 col</div>
                </div>
                <div class="col--sm--2 patternLibrary">
                    <div>2 col</div>
                </div>
                <div class="col--sm--2 patternLibrary">
                    <div>2 col</div>
                </div>
                <div class="col--sm--2 patternLibrary">
                    <div>2 col</div>
                </div>
                <div class="col--sm--2 patternLibrary">
                    <div>2 col</div>
                </div>
                <div class="col--sm--2 patternLibrary">
                    <div>2 col</div>
                </div>
            </div>
            <div class="row">
                <div class="col--sm--3 patternLibrary">
                    <div>3 col</div>
                </div>
                <div class="col--sm--3 patternLibrary">
                    <div>3 col</div>
                </div>
                <div class="col--sm--3 patternLibrary">
                    <div>3 col</div>
                </div>
                <div class="col--sm--3 patternLibrary">
                    <div>3 col</div>
                </div>
            </div>
            <div class="row">
                <div class="col--sm--4 patternLibrary">
                    <div>4 col</div>
                </div>
                <div class="col--sm--4 patternLibrary">
                    <div>4 col</div>
                </div>
                <div class="col--sm--4 patternLibrary">
                    <div>4 col</div>
                </div>
            </div>
            <div class="row">
                <div class="col--sm--6 patternLibrary">
                    <div>6 col</div>
                </div>
                <div class="col--sm--6 patternLibrary">
                    <div>6 col</div>
                </div>
            </div>
            <div class="row">
                <div class="col--sm--8 patternLibrary">
                    <div>8 col</div>
                </div>
                <div class="col--sm--4 patternLibrary">
                    <div>4 col</div>
                </div>
            </div>
        </div>
    </div>

    <div class="text-group">
        <p>Column classes are strutured as such: <span class="inline-code">col--[breakpoint]--[num of cols]</span></p>
        <p>Breakpoint classes are as follows: <span class="inline-code">xs</span>, <span class="inline-code">sm</span>, <span class="inline-code">md</span>, <span class="inline-code">lg</span></p>
        <p class="text-italic para p-sm">Smaller breakpoints take precedence</p>
    </div>

    <div class="module">
        <div class="module__display">
            <div class="row">
                <div class="col--xs--6 col--sm--3 col--md--6 patternLibrary">
                    <div>col--xs--6 col--sm--3 col--md--6</div>
                </div>
                <div class="col--xs--6 col--sm--3 col--md--6 patternLibrary">
                    <div>col--xs--6 col--sm--3 col--md--6</div>
                </div>
                <div class="col--xs--6 col--sm--3 col--md--8 patternLibrary">
                    <div>col--xs--6 col--sm--3 col--md--8</div>
                </div>
                <div class="col--xs--6 col--sm--3 col--md--4 patternLibrary">
                    <div>col--xs--6 col--sm--3 col--md--4</div>
                </div>
            </div>
        </div>

<pre><code class="language-markup">
<div class="row">
    <div class="col--xs--6 col--sm--3 col--md--6">
        
    </div>
    <div class="col--xs--6 col--sm--3 col--md--6">
        
    </div>
    <div class="col--xs--6 col--sm--3 col--md--8">
        
    </div>
    <div class="col--xs--6 col--sm--3 col--md--4">
        
    </div>
</div>
</code></pre>
    </div>

    <div class="section section--short section--flush-bottom">
        <div class="text-group">
            <div class="h5 text-group__hd">Additional Extensions:</div>
            <ul class="vList vList--bullets">
                <li><p class="text-italic">Use <span class="inline-code">col-[breakpoint]-pull--[col num]</span> and <span class="inline-code">col-[breakpoint]-push--[col num]</span> to push and pull columns</p></li>
                <li><p class="text-italic">Use <span class="inline-code">col--[breakpoint]--offset--[col num]</span> to offset columns at specific breakpoints</p></li>
            </ul>
        </div>
    </div>
    <div class="module">
        <div class="module__display">
            <div class="row">
                <div class="col--sm--8 col--sm--offset--2 patternLibrary">
                    <div>col--sm--8 col--sm--offset--2</div>
                </div>
                <div class="col--sm--4 col--sm--push--8 patternLibrary">
                    <div>col--sm--4 col--sm--push--8</div>
                </div>
                <div class="col--sm--8 col--sm--pull--4 patternLibrary">
                    <div>col--sm--8 col--sm--pull--4</div>
                </div>
            </div>
        </div>
<pre><code class="language-markup">
<div class="row">
    <div class="col--sm--8 col--sm--offset--2">

    </div>
    <div class="col--sm--4 col--sm--push--8">

    </div>
    <div class="col--sm--8 col--sm--pull--4">

    </div>
</div>
</code></pre>
    </div>
</article>