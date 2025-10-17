import PropTypes from 'prop-types';
import { Search } from 'lucide-react';
import Input from '../ui/Input';

const SearchInput = ({ value, onChange, placeholder = 'Search...', className }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      icon={<Search className="w-4 h-4" />}
      className={className}
    />
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default SearchInput;