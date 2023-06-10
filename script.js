//your JS code here. If required.
function windowSize() {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  return { width, height };
}

function handleResize() {
  const windowSize = windowSize();
	let h1 = documnet.getElementById('h1');
	let x = windowSize.width;
	let y = windowSize.height;
	h1.innerText = `Width: ${x} and Height: ${y}`;
  // console.log("Window width:", windowSize.width);
  // console.log("Window height:", windowSize.height);
}

window.addEventListener("resize", handleResize);

// Initial window size
console.log("Initial window width:", getWindowSize().width);
console.log("Initial window height:", getWindowSize().height);

