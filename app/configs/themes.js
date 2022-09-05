import {DarkTheme} from '@react-navigation/native';
import colors from 'configs/colors';
import dimens from 'configs/dimens';

const lightTheme = {

};

const darkTheme = {
    none: {},
    primary: colors.primaryDarkColor,
    background: colors.backgroundDarkColor,
    navigation: {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            primary: colors.primaryDarkColor,
            background: colors.backgroundDarkColor,
            card: colors.contentDarkColor,
            text: colors.primaryTextDarkColor,
            border: colors.dividerDarkColor,
            notification: colors.badgeDarkColor
        }
    },
    elements: {
        colors: {
            background: colors.backgroundDarkColor,
            primary: colors.primaryDarkColor,
            secondary: colors.secondaryDarkColor,
            white: colors.white,
            black: colors.black,
            grey0: colors.primaryTextDarkColor,
            grey1: colors.secondaryTextDarkColor,
            grey2: colors.secondaryTextDarkColor,
            grey3: colors.secondaryTextDarkColor,
            grey4: colors.tertiaryTextDarkColor,
            grey5: colors.tertiaryTextDarkColor,
            greyOutline: colors.grayDarkColor,
            searchBg: colors.contentDarkColor,
            success: colors.successTextDarkColor,
            error: colors.errorTextDarkColor,
            warning: colors.warningTextDarkColor,
            divider: colors.dividerDarkColor
        },
        Badge: {
            badgeStyle: {
                borderWidth: 0
            }
        },
        Chip: {
            buttonStyle: {
                height: 25,
                backgroundColor: colors.chipDarkColor,
                paddingVertical: 0,
                paddingHorizontal: 8
            },
            titleStyle: {
                fontSize: dimens.smallText,
                color: colors.primaryTextDarkColor,
                fontFamily: 'Montserrat-Regular'
            }
        },
        Divider: {
            style: {
                backgroundColor: colors.dividerDarkColor
            }
        }
    },
    base: {
        colors: {
            primary: {
                50: colors.primaryDarkColor,
                100: colors.primaryDarkColor,
                200: colors.primaryDarkColor,
                300: colors.primaryDarkColor,
                400: colors.primaryDarkColor,
                500: colors.primaryDarkColor,
                600: colors.primaryDarkColor,
                700: colors.primaryDarkColor,
                800: colors.primaryDarkColor,
                900: colors.primaryDarkColor
            }
        },
        components: {
            Button: {
                defaultProps: {
                    px: 16,
                    bg: colors.primaryDarkColor,
                    rounded: 30,
                    _hover: {
                        bg: colors.primaryGammaDarkColor
                    },
                    _pressed: {
                        bg: colors.primaryDarkColor
                    },
                    _focus: {
                        bg: colors.primaryDarkColor
                    },
                    _text: {
                        fontSize: dimens.normalText,
                        color: colors.buttonTextDarkColor,
                        fontFamily: 'Inter-Bold'
                    }
                }
            },
            Menu: {
                defaultProps: {
                    rounded: 5,
                    borderWidth: 1,
                    borderColor: colors.dividerDarkColor,
                    bg: colors.contentDarkColor
                }
            },
            MenuItem: {
                defaultProps: {
                    _hover: {
                        bg: colors.primaryAlphaDarkColor
                    },
                    _pressed: {
                        bg: colors.contentDarkColor
                    },
                    _focus: {
                        bg: colors.contentDarkColor
                    }
                }
            },
            Input: {
                defaultProps: {
                    rounded: 0,
                    borderWidth: 0,
                    bg: colors.black,
                    color: colors.primaryTextDarkColor,
                    _hover: {
                        bg: colors.primaryAlphaDarkColor,
                        borderColor: colors.primaryDarkColor
                    },
                    _pressed: {
                        bg: colors.contentDarkColor,
                        borderColor: colors.primaryDarkColor
                    },
                    _focus: {
                        bg: colors.contentDarkColor,
                        borderColor: colors.primaryDarkColor
                    }
                }
            },
            Select: {
                defaultProps: {
                    rounded: 0,
                    borderWidth: 0,
                    bg: colors.black,
                    color: colors.primaryTextDarkColor,
                    _hover: {
                        bg: colors.primaryAlphaDarkColor,
                        borderColor: colors.primaryDarkColor
                    },
                    _pressed: {
                        bg: colors.contentDarkColor,
                        borderColor: colors.primaryDarkColor
                    },
                    _focus: {
                        bg: colors.contentDarkColor,
                        borderColor: colors.primaryDarkColor
                    }
                }
            }
        }
    }
};

export function helpers(name, theme) {
    return theme === 'dark' ? darkTheme[name] : lightTheme[name];
}
