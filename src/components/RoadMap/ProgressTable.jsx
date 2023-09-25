import "./ProgressTable.css";

function ProgressTable(props) {
  return (
    <ul className='roadmap'>
      <li className='roadmap__item'>
        <h4 className='roadmap__item-title roadmap__item-title_active'>
          1 неделя
        </h4>
        <p className='roadmap__item-value'>Back-end</p>
      </li>
      <li className='roadmap__item'>
        <h4 className='roadmap__item-title'>4 недели</h4>
        <p className='roadmap__item-value'>Front-end</p>
      </li>
    </ul>
  );
}
export default ProgressTable;
