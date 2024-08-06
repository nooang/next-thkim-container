'use client';

import Link from "next/link";
import { openPreparingModal } from "../lib/util";

export default function MainNav() {
  return (
    <>
      <div id="menu-wrap">
        <ul className="flex">
          <Link href={"/mini-project"}><li className="px-5 py-2 m-2 bg-red-300 text-rose-100 rounded-md">미니프로젝트</li></Link>
          <Link href={"#"}><li className="px-5 py-2 m-2 bg-red-300 text-rose-100 rounded-md" onClick={openPreparingModal}>메뉴2</li></Link>
          <Link href={"#"}><li className="px-5 py-2 m-2 bg-red-300 text-rose-100 rounded-md" onClick={openPreparingModal}>메뉴3</li></Link>
          <Link href={"#"}><li className="px-5 py-2 m-2 bg-red-300 text-rose-100 rounded-md" onClick={openPreparingModal}>메뉴4</li></Link>
        </ul>
      </div>
    </>
  )
}