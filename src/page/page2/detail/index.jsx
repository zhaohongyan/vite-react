import { useParams } from 'react-router-dom'

export default () => {
  const { id } = useParams()
  return (
    <div>
      <p>详情页面，待开发……</p>
    </div>
  )
}