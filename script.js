const processBlocks = document.querySelectorAll(".process_block ");

processBlocks.forEach((block) => {
  const btn = block.querySelector(".btn_process");
  const btnImg = block.querySelector(".btn_img");

  btn.addEventListener("click", () => {
    block.classList.toggle("process_block_isActive");
    if (block.classList.contains("process_block_isActive")) {
      btnImg.src = "./assets/icons/-.svg";
    } else {
      btnImg.src = "./assets/icons/+.svg";
    }
  });
});
