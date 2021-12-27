import { Link } from 'react-router-dom'
import { Button } from 'antd';

export default () => {
  return (
    <div className="not_found">
      <div>
        <h3>您访问的路径不存在</h3>
        <Link to="/"><Button type="primary">Back Home</Button></Link>
      </div>
    </div>
  );
}