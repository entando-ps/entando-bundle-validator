<#assign wp=JspTaglibs["/aps-core"]>

<div id="single-spa-react-router-widget"></div>

<script nonce="<@wp.cspNonce />">
    System.import('single-spa').then(function (singleSpa) {
        System.import('single-spa-react-router-widget').then(parcel=>{
            const domElement = document.getElementById('single-spa-react-router-widget');
            const parcelProps = {domElement, customProp1: 'foo'};
            singleSpa.mountRootParcel(parcel, parcelProps);
        })

        singleSpa.start();
    });
</script>
