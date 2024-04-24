'use client'

import { useState } from 'react'
import styles from "./page.module.css";

const MENU_ITEMS = [
  { value: 1, item: '육회 비빔밥' },
  { value: 2, item: '돈까스' },
  { value: 3, item: '마파두부' },
  { value: 4, item: '양꼬치집 점심 뷔페' },
  { value: 5, item: '파스타' },
  { value: 6, item: '맥도날드' },
  { value: 7, item: '서브웨이' },
  { value: 8, item: '포케' },
  { value: 9, item: '분식' },
  { value: 10, item: '닭갈비' },
  { value: 11, item: '순대국밥' },
  { value: 12, item: '라멘' },
  { value: 13, item: '부대찌개' },
  { value: 14, item: '쭈마왕' },
  { value: 15, item: '월선네' },
  { value: 16, item: '카야 토스트' },
  { value: 17, item: '스타벅스' },
  // { value: 18, item: '' },
  // { value: 19, item: '' },
  // { value: 20, item: '' },
  // { value: 21, item: '' },
]

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState(null)
  const [count, setCount] = useState(0)

  const handlePickMenu = () => {
    setCount((prev) => prev + 1)
    const item = Math.floor(Math.random() * 17) + 1
    setSelectedMenu(MENU_ITEMS[item].item)
  }
  return (
    <main className={styles.main}>
      <div>
        <h2>점심 메뉴 선택기</h2>
        <div className={styles.menuWrapper}>
          <strong>{selectedMenu || '메뉴를 선택하세요'}</strong>
          <button disabled={count === 2} type="button" onClick={handlePickMenu}>{count === 0 ? '고르기' : count === 1 ? '다시 고르기' : '선택불가'}</button>
        </div>
        {count === 2 && <p className={styles.info}>{`더는 선택할 수 없습니다. 오늘의 점심은 ${selectedMenu}입니다.`}</p>}
      </div>
    </main>
  )
}
