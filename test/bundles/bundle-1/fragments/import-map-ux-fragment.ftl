<#assign wp=JspTaglibs["/aps-core"]>
<#assign serverLocation = "/entando-de-app/cmsresources/codemotion-example-bundle">

<!--import map override plugin -->
<meta name="importmap-type" content="systemjs-importmap"/>
<script nonce="<@wp.cspNonce />" src="https://cdn.jsdelivr.net/npm/systemjs/dist/system.js" ></script>
<script nonce="<@wp.cspNonce />" type="systemjs-importmap">
{
  "imports": {
    "single-spa": "https://cdn.jsdelivr.net/npm/single-spa/lib/system/single-spa.dev.js",
    "codemotion-card-widget": "<@wp.resourceURL />/codemotion-example-bundle/static/js/codemotion-card-widget.js"
  }
}
</script>
<!--
Make sure to put this BEFORE any <script nonce="<@wp.cspNonce />" type="module" > elements or any System.import() calls, but
AFTER all other import maps
-->
<script nonce="<@wp.cspNonce />" type="text/javascript" src="https://cdn.jsdelivr.net/npm/import-map-overrides@2.3.0/dist/import-map-overrides.js"></script>
<!-- optionally include the UI for import map overrides -->
<import-map-overrides-full show-when-local-storage="devtools"></import-map-overrides-full>
<script nonce="<@wp.cspNonce />" src="${serverLocation}/js/entando-sspa.js" ></script>
