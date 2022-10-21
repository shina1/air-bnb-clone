import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {  airBnbPinkColor, airBnbDarkGreyColor } from './customColors';




const layout = createTheme(
    {
        typography: {
            allVariants: {
                fontFamily: 'Raleway',
                textTransform: 'none',
                fontSize: 15,
                fontWeight: 600
            },
        },
        palette: {
            primary: {
                main: airBnbDarkGreyColor,
            },
            secondary: {
                main: airBnbPinkColor,
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

const ComponentLayout = (props: any) => {
    return <ThemeProvider theme={layout}>{props.children}</ThemeProvider>
}

export default ComponentLayout

