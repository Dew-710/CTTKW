function getCVFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('cv');
}

function fetchCV(url_html, iframe_id) {
    fetch(url_html)
        .then(res => res.text())
        .then(html  => {
            const iframe = document.getElementById(iframe_id);
            iframe.srcdoc = html;

            iframe.onload = function() {
                try {
                    const doc = iframe.contentDocument || iframe.contentWindow.document;
                    const style = doc.createElement('style');
                        style.textContent = `
                            html, body {
                                margin: 0;
                                padding: 0;
                                width: 100%;
                                height: 100%;
                                box-sizing: border-box;
                            }
                        `;
                    doc.head.appendChild(style);
                    const link = doc.createElement('link');
                    doc.head.appendChild(link);
                } catch(err) {
                    console.warn("Không inject được CSS vì iframe bị khác domain hoặc sandbox",err);
                }
            }
        })
        .catch(err => console.error(err));
}

window.onload = function() {
    const cv = getCVFromURL();
    if (cv === 'cv1') {
        fetchCV('../Cvs/cv1.html', 'sample-cv');
    }
    if (cv === 'cv2') {
        fetchCV('../Cvs/cv2.html', 'sample-cv');
    }
    if (cv === 'cv3') {
        fetchCV('../Cvs/cv4.html', 'sample-cv');
    }
    if (cv === 'cv4') {
        fetchCV('../Cvs/cv5.html', 'sample-cv');
    }
    if (cv === 'cv5') {
        fetchCV('../Cvs/cv3.html', 'sample-cv');
    }
};
