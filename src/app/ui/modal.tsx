'use client';

export default function Modal() {
  function closePreparingModal() {
    const modalOverlay = document.getElementById("modal-overlay");
    const modalWrap = document.getElementById("modal-wrap");

    modalOverlay?.classList.remove("active");
    modalWrap?.classList.remove("active");
    
  }

  return (
    <>
      <div id="modal-overlay" className="w-full h-full absolute bg-black z-50"
           onClick={closePreparingModal}></div>
      <div id="modal-wrap" className="inline-block w-1/3 h-1/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-md z-50 overflow-hidden">
        <div id="modal-content" className="relation w-full h-full flex justify-center items-center">
          <button className="absolute text-3xl top-1 right-2"
                  onClick={closePreparingModal}>&times;</button>
          <div id="modal-body" className="text-xl">
            On preparing. Please wait.
          </div>
        </div>
      </div>
    </>
  )
}