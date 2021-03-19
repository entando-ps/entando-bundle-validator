(function (global) {
    window.entando = window.entando || {}
    window.entando.sspa = window.entando.sspa || {}

    window.entando.sspa.mountMF = (mfName, afterDomNode, mfProps) => {
        const domElement = afterDomNode.parentNode.insertBefore(document.createElement("span"), afterDomNode.nextSibling)
        System.import('single-spa').then(function (singleSpa) {
            System.import(mfName).then(parcel => {
                const parcelProps = {
                    domElement,
                    ...mfProps
                }
                singleSpa.mountRootParcel(parcel, parcelProps);
            })
            singleSpa.start();
        })
    }
})(window)
