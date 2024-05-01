import { useState } from 'react'

export const useTabs = (
  initialTabIndex: number,
  allTabs: { tab: string; content: string }[]
) => {
  const [currentIndex, setCurrentIndex] = useState(initialTabIndex)

  if (!allTabs || !Array.isArray(allTabs)) {
    return {
      currentItem: "Tabs are undefined or Tabs aren't Array.",
      changeItem: setCurrentIndex,
    }
  }
  return {
    currentItem: allTabs[currentIndex].content,
    changeItem: setCurrentIndex,
  }
}
