replaceYiddin(document.body);

function replaceYiddin(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceYiddin);
  } else if (element.nodeType === Text.TEXT_NODE) {
    element.textContent = element.textContent.replace(/testing/gi, "████");
    element.textContent = element.textContent.replace(/test/gi, "████");
    //test
  }
}
