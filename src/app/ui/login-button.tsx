'use client';

import { openPreparingModal } from "../lib/util";

export default function LoginButton() {

  return (
    <>
      <div id="user-wrap">
        <button id="user-login" className="p-2 m-2 bg-stone-300 text-gray-800 rounded-md"
                onClick={openPreparingModal}>로그인</button>
        <button id="user-register" className="p-2 m-2 bg-stone-300 text-gray-800 rounded-md"
                onClick={openPreparingModal}>회원가입</button>
      </div>
    </>
  )
}