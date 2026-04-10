const processBlocks = document.querySelectorAll(".process_block ");

processBlocks.forEach((block) => {
  const btn = block.querySelector(".btn_process");

  btn.addEventListener("click", () => {
    block.classList.toggle("process_block_isActive");
  });
});
