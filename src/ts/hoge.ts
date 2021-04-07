function addDiv() {
  const hello_div = document.createElement("div");
  hello_div.id = "hoge";
  hello_div.textContent = "Hello! hoge!";
  document.body.appendChild(hello_div);
}

export { addDiv };
