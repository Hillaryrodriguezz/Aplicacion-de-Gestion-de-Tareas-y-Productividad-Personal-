import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#0A7DF3',
    },
    '& .MuiInput-underline': {
      borderBottomColor: '#B2BAC2',
      marginTop: '40px'
    },
      });

  export function CustomizedInputsStyled({label}) {
    return (
        <CssTextField label={label} id="custom-css-outlined-input" />
    );
  }