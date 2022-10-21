import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const airBnbPinkColor = '#FF385C';
const airBnbGreyColor = '#717171';

const layout = createTheme(
    {
        typography: {
            allVariants: {
                fontFamily: 'Raleway',
                textTransform: 'none',
                fontSize: 15,
            },
        },
        palette: {
            primary: {
                main: airBnbGreyColor,
            },
            secondary: {
                main: airBnbPinkColor
            },
        },
        components: {
            MuiTypography: {
                defaultProps: {
                    sx:{
                        px: 1
                    },
                    variant: 'subtitle2',
                    textTransform: 'capitalize',
                },
            },
            MuiStack: {
                defaultProps: {
                    sx: {
                        px: 2,
                        py: 1
                    },
                    spacing: 2,
                    direction: 'row',
                }
            },
            MuiPaper: {
                defaultProps: {
                    elevation: 0
                }
            },
            MuiLink: {
                defaultProps: {
                    sx: {
                        color: layout => layout.palette.primary.main
                    },
                    underline: 'none',
                }
            },
            MuiButton: {
                
                defaultProps:{
                    sx:{
                        p:0,
                    },
                    size: 'small',
                    disableRipple: true,
                    
                },
                //@ts-ignore
                variant: 'text',
            },
            MuiTab: {
                defaultProps:{
                    disableRipple: true,
                },
            }
        }
    }
);

const ComponentLayout = () => {
    return <ThemeProvider theme={layout}></ThemeProvider>
}

export default ComponentLayout

