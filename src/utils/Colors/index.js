const mainColors = {
    greyLine: "#F4F4F4",
    green: '#569E84',
    greenLight: '#D5EED9',
    orange: '#F1732D',
    red: '#F32F2F',
    grey: '#4D4D4D',
    greyLight: '#9F9F9F',
    white: '#ffffff',
    blue: '#2F7FE2'
}

export const colors = {
    white: mainColors.white,
    line: mainColors.greyLine,
    badge: {
        borderGreen: mainColors.green,
        borderOrange: mainColors.orange,
        fillGreen: mainColors.greenLight,
        fillRed: mainColors.red
    },
    text: {
        primary: mainColors.grey,
        secondary: mainColors.greyLight,
        white: mainColors.white,
        orange: mainColors.orange,
        blue: mainColors.blue
    },
    button: {
        primary: mainColors.orange
    }
}