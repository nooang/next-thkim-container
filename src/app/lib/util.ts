export function openPreparingModal() {
  const modalOverlay = document.getElementById("modal-overlay");
  const modalWrap = document.getElementById("modal-wrap");

  modalOverlay?.classList.add("active");
  modalWrap?.classList.add("active");
}