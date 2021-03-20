<#assign wp=JspTaglibs["/aps-core"]>

<div id="single-spa-react-widget"></div>

<script nonce="<@wp.cspNonce />">
    System.import('single-spa').then(function (singleSpa) {
        System.import('single-spa-react-widget').then(parcel=>{
            const domElement = document.getElementById('single-spa-react-widget');
            const parcelProps = {domElement, customProp1: 'foo'};
            singleSpa.mountRootParcel(parcel, parcelProps);
        })

        singleSpa.start();
    });
</script>
