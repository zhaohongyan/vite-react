import { useParams, useLocation } from 'react-router-dom'
import styles from './index.module.less'

export default () => {
  const { id } = useParams()
  let location = useLocation();
  console.log(location)
  return (
    <div className={styles.detail}>
      <h3>location: {location.pathname}</h3>
      detail: {id}
    </div>
  )
}