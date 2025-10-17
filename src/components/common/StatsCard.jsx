import PropTypes from 'prop-types';
import { cn } from '../../utils/cn';
import Card from '../ui/Card';

const StatsCard = ({ title, value, className }) => {
  return (
    <Card className={cn('hover:shadow-md transition-shadow', className)}>
      <div className="space-y-2">
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
    </Card>
  );
};

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
};

export default StatsCard;