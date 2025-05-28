function addRecommendation() {
  const container = document.getElementById("recommendations");
  const textarea = document.getElementById("recommendation_text");
  const popup = document.getElementById("popup");

  if (textarea.value.trim() !== "") {
    const newRec = document.createElement("div");
    newRec.className = "recommendation";
    newRec.innerText = textarea.value.trim();
    container.appendChild(newRec);
    textarea.value = "";
    showPopup(true);
  }
}

function showPopup(status) {
  const popup = document.getElementById("popup");
  if (status) {
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  }
}