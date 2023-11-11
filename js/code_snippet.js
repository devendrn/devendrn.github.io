// code snippets
const code_snippets = document.getElementsByClassName("code-snippet");

for (var i = 0; i < code_snippets.length; i++) {
  const code_pre_tag = code_snippets[i].firstElementChild
  const copy_btn = document.createElement("i");
  copy_btn.classList.add("fa-regular", "fa-clone");
  code_snippets[i].appendChild(copy_btn);

  copy_btn.addEventListener("click", () => {
    const range = document.createRange();
    range.selectNode(code_pre_tag);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  });
}

