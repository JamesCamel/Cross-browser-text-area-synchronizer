const mdTextArea = (document.querySelector('.source') as HTMLTextAreaElement);

//Send tabId to background.
window.onload = () => {
    chrome.runtime.sendMessage({ source: "load1" });


    mdTextArea.addEventListener("input", () => {
        chrome.runtime.sendMessage({ source: "markdown_it", text: mdTextArea.value }, () => {});
    });
    chrome.runtime.onMessage.addListener((request) => {
        if (request) {
            mdTextArea.value = request;
        } else {
            chrome.runtime.sendMessage({ source: "markdown_it", text: mdTextArea.value }, () => {});
        }
        return true;
    });
};