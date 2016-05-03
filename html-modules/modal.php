<article class="section section--border" id="modal">
    <header class="section__hd">
        <h3 class="h-lg">Simple Modal</h3>
    </header>
    <p class="text-italic">Usage: pop-up content</p>

    <div class="module">
        <div class="module__display">
            <div class="link" data-click-target="modal1" data-click-bodyClass="modal-is-active">Open Modal</div>
            <div class="modal" id="modal1">
                <div class="modal__close" data-click-target="modal1" data-click-bodyClass="modal-is-active">
                    <div>
                        <p class="sr-only">Close Modal</p>
                        <svg width="18" height="18"><use xlink:href="#shape-close"></use></svg>
                    </div>
                </div>
                <div class="modal__hd">
                    <h4 class="h5">Simple Modal</h4>
                </div>
                <div class="modal__bd">
                    <div class="text-group">
                        <p class="p p-sm">Mazim vivendo sit ut. Eos natum sententiae intellegam te. Ea aperiri iracundia interesset mea, an his impetus definiebas. Solet populo eum no, pri etiam viris ut, vix ad quas saepe admodum. Sonet timeam ex qui, doctus dolores ex sed. Has ut mutat rationibus.</p>
                        <p class="p p-sm">Mazim vivendo sit ut. Eos natum sententiae intellegam te. Ea aperiri iracundia interesset mea, an his impetus definiebas.</p>
                        <div class="text-group__ft">
                            <a class="btn" href="">Call to Action</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


<pre><code class="language-markup">
<!-- Trigger -->
<div class="link" data-click-target="modal-demo" data-click-bodyClass="modal-is-active">Open Modal</div>

<!-- Modal -->
<div class="modal" id="modal-demo">
    <div class="modal__close" data-click-target="modal-demo" data-click-bodyClass="modal-is-active">
        <div>
            <p class="sr-only">Close Modal</p>
            <svg width="18" height="18"><use xlink:href="#shape-close"></use></svg>
        </div>
    </div>
    <div class="modal__hd">
        <h4 class="h5">Simple Modal</h4>
    </div>
    <div class="modal__bd">
        <p>Mazim vivendo sit ut. Eos natum sententiae ...</p>
    </div>
</div>
</code></pre>
    </div>
</article>