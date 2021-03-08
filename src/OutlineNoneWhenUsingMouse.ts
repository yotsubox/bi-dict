export default function OutlineNoneWhenUsingMouse() {
  document.body.addEventListener("mousedown", () => {
    document.body.classList.add("using-mouse");
  });

  document.body.addEventListener('keydown', (e) => {
    if (e.key === "Tab")
      document.body.classList.remove('using-mouse');
  });
}