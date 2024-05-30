import { StylesConfig } from 'react-select';

export const selectStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    paddingLeft: '10px',
    paddingRight: '10px',
    width: '190px',
    height: '48px',
    backgroundColor: '#FFFFFF',
    color: 'black',
    fontSize: '16px',
    fontFamily: 'Manrope, sans-serif',
    lineHeight: '1.6',
    boxShadow: 'initial',
    borderColor: 'transparent',
    borderRadius: '30px',
    ':hover': {
      border: '1px solid #F6B83D',
      outline: 'none',

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
    borderColor: 'transparent',
    fontWeight:'bold',
      outline: 'none',
    color: state.isFocused ? '#F6B83D' : 'rgba(38, 38, 38, 0.6)',
    ':hover': {
       outline: 'none',
      borderColor: 'transparent',
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
    width: '200px',
    marginTop: '0px',
    backgroundColor: '#FFFFFF',
     borderRadius:'15px',
    zIndex: 9999,
     overflow: 'hidden',
  }),
  menuList: (provided) => ({
    ...provided,
    borderRadius: '15px',
    padding: '0px',
    maxHeight: '160px',
    zIndex: 9999,
    overflowY: 'scroll', 
    '&::-webkit-scrollbar': {
      width: '16px',
      height: '25px',
    },
    '&::-webkit-scrollbar-track': {
     backgroundColor: '#FFFFFF',
      borderRadius:'15px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(38, 38, 38, 0.08)',
      border: '4px solid #FFFFFF',
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
       borderRadius:'15px',
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
      borderRadius:'15px',
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
  })
};
