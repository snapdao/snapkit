import { Icon } from '.'

export default {
  title: 'Icon',
  component: Icon
}

export const All = () => {
  const icons = Object.keys(Icon).map(k => {
    const Item = (Icon as unknown as { [propName: string]: typeof Icon.Chrome })[k]
    return (
      <div className="sk-t-center" style={{ padding: '20px' }} key={k}>
        <Item />
        <div style={{ marginTop: '6px' }} className="title">
          {k}
        </div>
      </div>
    )
  })
  return <div className="sk-flex sk-items-end sk-flex-wrap">{icons}</div>
}

export const Inline = () => (
  <p>
    This is a icon.<Icon.Back></Icon.Back>This is a example.
  </p>
)
