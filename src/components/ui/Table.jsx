import PropTypes from 'prop-types';
import { cn } from '../../utils/cn';

const Table = ({ children, className }) => {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full">
        {children}
      </table>
    </div>
  );
};

Table.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Table;