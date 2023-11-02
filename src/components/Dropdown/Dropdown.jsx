import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ value, onChange, placeholder, options }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='max-w-[220px] w-full'>
      <div
        onClick={() => setOpen(!open)}
        tabIndex={0}
        className='w-full flex items-center justify-between py-4 px-2 border-2 border-gray-400 rounded-md cursor-pointer focus:border-[#B6CFFF] focus:shadow-[0px_0px_0px_2px_rgb(182,207,255,0.25)]'
      >
        <p className='text-sm text-gray-400'>{value ? value : placeholder}</p>
        <MdKeyboardArrowDown
          className={`text-sm transition-all ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      {open && (
        <div className='absolute top-[110] left-0 w-full max-h-[320px] rounded-md border-2 border-gray-400'>
          {options.map((option) => (
            <div
              onClick={() => onChange(option)}
              className={`flex py-2 px-2 cursor-pointer ${
                option === value ? 'bg-gray-200' : 'bg-white'
              } hover:bg-gray-200 rounded-sm`}
              key={option}
            >
              <p className='text-sm text-black-200'>{option}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default Dropdown;
