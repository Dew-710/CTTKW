const { createElement } = require("react");

function fetchCV() {
    fetch()
        .then(res => res.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const iframe = createElement('iframe');
        });
}