import Breadcrumb from '../Breadcrumb';
import TableOne from '../Component/TableOne';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        
      </div>
    </>
  );
};

export default Tables;