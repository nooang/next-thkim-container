"use client";

export default function Page() {
  function changeBgColor() {
    const backGround = document.getElementById("back-ground") as HTMLElement;
    if (backGround.classList.contains("bg-red-500")) {
      backGround.classList.remove("bg-red-500");
      backGround.classList.add("bg-blue-500");
      backGround.innerText = "current color: blue";
    }
    else {
      backGround.classList.add("bg-red-500");
      backGround.classList.remove("bg-blue-500");
      backGround.innerText = "current color: red";
    }
  }

  return(
    <div id="quiz-wrap" className="w-1/2 h-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded-md overflow-hidden bg-slate-200">
      <span id="quiz-number" className="inline-block p-2 m-3 font-bold text-xl bg-slate-200 text-slate-700 cursor-default">No.1 - Color Flipper</span>
      <div className="h-1/2 mt-10 flex justify-center items-center bg-slate-200">
        <div id="back-ground" className="w-1/2 h-full bg-red-500 flex justify-center items-center rounded cursor-default">current color: red</div>
        <button className="bg-slate-500 p-5 mx-5 rounded-md" onClick={changeBgColor}>Change Button</button>
      </div>
    </div>
  )
}