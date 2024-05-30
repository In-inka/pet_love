import { StylesConfig } from 'react-select';

export const selectStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
     paddingLeft: '10px',
    width: '200px',
    height: '48px',
    backgroundColor: '#FFFFFF',
    color: 'black',
    fontSize: '16px',
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: '1.6',
    boxShadow: 'initial',
    borderColor: 'transparent',
    borderRadius: '30px',
    ':hover': {
      border: '1px solid #F6B83D',
      outline: 'none',
      boxShadow: 'initial',
    },
     ':focus': {
      border: '1px solid #F6B83D',
      outline: 'none',
      boxShadow: 'initial',
    },
    '::placeholder': {
      color: 'black',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    rounded: 'md',
    cursor: 'pointer',
     backgroundColor: '#FFFFFF',
    color: state.isFocused ? '#F6B83D' : 'inherit',
    ':hover': {
      backgroundColor: '#FFFFFF',
      color: '#F6B83D',
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  menu: (provided) => ({
    ...provided,

    marginTop: '0px',
    backgroundColor: '#F5F5F5',
    zIndex: 9999,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: '0px',
    maxHeight: '160px',
    zIndex: 9999,
    overflowY: 'scroll', // Устанавливаем значение overflowY в 'scroll'
    '&::-webkit-scrollbar': {
      width: '16px',
      height: '25px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'white',
      borderRadius: '2px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(38, 38, 38, 0.08)',
      border: '4px solid #FAFAFA',
      borderRadius: '8px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
    '&::-webkit-scrollbar-thumb:horizontal': {
      maxWidth: '8px',
    },
    '&::-webkit-scrollbar-thumb:vertical': {
      height: '25px',
    },
    '& scrollbar': {
      width: '16px',
    },
    '& scrollbar-track': {
      background: 'rgba(38, 38, 38, 0.08)',
      borderRadius: '2px',
    },
    '& scrollbar-thumb': {
      background: 'rgba(38, 38, 38, 0.08)',
      border: '4px solid rgba(38, 38, 38, 0.08)',
      borderRadius: '8px',
      height: '25px',
    },
    '& scrollbar-thumb:hover': {
      background: 'rgba(38, 38, 38, 0.08)',
    },
    '& scrollbar-thumb:horizontal': {
      maxWidth: '8px',
    },
    '& scrollbar-thumb:vertical': {
      height: '25px',
    },
    '&::-ms-scrollbar': {
      width: '16px',
    },
    '&::-ms-scrollbar-track': {
      background: 'rgba(38, 38, 38, 0.08)',
      borderRadius: '2px',
    },
    '&::-ms-scrollbar-thumb': {
      background: 'rgba(38, 38, 38, 0.08)',
      border: '4px solid #FAFAFA',
      borderRadius: '8px',
      height: '25px',
    },
    '&::-ms-scrollbar-thumb:hover': {
      background: '#555',
    },
    '&::-ms-scrollbar-thumb:horizontal': {
      maxWidth: '8px',
    },
    '&::-ms-scrollbar-thumb:vertical': {
      height: '25px',
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: '#000000',
    fontSize: '18px',
    ':hover': {
      color: '#000000',
    },
  }),
};
