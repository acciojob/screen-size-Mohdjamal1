//your JS code here. If required.
  const width = window.innerWidth;
  const height = window.innerHeight;

function handleResize() {
  
	let h1 = documnet.getElementById('h1');
	h1.innerText = `Width: ${width} and Height: ${height}`;
  // console.log("Window width:", windowSize.width);
  // console.log("Window height:", windowSize.height);
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

// Initial window size
console.log("Initial window width:", getWindowSize().width);
console.log("Initial window height:", getWindowSize().height);

