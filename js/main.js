const plugin = {};

plugin.getDataFromInput = function () {
  const input = document.querySelector("#imgInp");
  function getData(input) {
    // 判斷查看有沒有檔案
    if (input.files && input.files[0]) {
      // 讀取檔案
      let reader = new FileReader();
      reader.onload = function (e) {
        const previewImg = document.querySelector("#preview_img");
        previewImg.setAttribute("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  input.addEventListener("change", function () {
    console.log(this.parentNode );
    getData(this);
  });
};


plugin.getDataFromInput();

