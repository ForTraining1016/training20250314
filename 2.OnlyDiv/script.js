document.getElementById("toggleSwitch").addEventListener("change", function() {
    document.getElementById("toggleText").style.display = this.checked ? "block" : "none";
});

function startLoading() {
    const overlay = document.getElementById("popup-overlay");
    const popup = document.getElementById("popup");
    const text = document.getElementById("popup-text");

    text.innerText = "JavaScriptが起動しました！";
    overlay.style.display = "flex";

    setTimeout(() => {
        text.innerText = "処理完了！";
        setTimeout(closePopup, 1000);
    }, Math.random() * 2000 + 3000);

    setTimeout(() => {
        popup.classList.add("show");
    }, 100);
}

function closePopup() {
    const overlay = document.getElementById("popup-overlay");
    const popup = document.getElementById("popup");
    popup.classList.remove("show");
    setTimeout(() => {
        overlay.style.display = "none";
    }, 300);
}

function getTime() {
    document.getElementById("time").innerText = `現在時刻: ${new Date().toLocaleString("ja-JP")}`;
}
