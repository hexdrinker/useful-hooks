import { useTabs } from '../hooks/useTabs'

export default function useTabsPage() {
  const contents = [
    {
      tab: 'Section 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, laudantium.',
    },
    {
      tab: 'Section 2',
      content: '얄리얄리 얄랴셩 얄라리 얄라',
    },
  ]

  const { currentItem, changeItem } = useTabs(0, contents)
  return (
    <div>
      {contents.map((content, index) => (
        <button
          key={index}
          onClick={() => changeItem(index)}
        >
          {content.tab}
        </button>
      ))}
      <div>{currentItem}</div>
    </div>
  )
}
