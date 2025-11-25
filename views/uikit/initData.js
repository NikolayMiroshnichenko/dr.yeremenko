import Colors from "./components/Colors/Colors"
import ButtonsDemo from "./components/ButtonsDemo/ButtonsDemo"
import TypographyDemo from "./components/TypographyDemo/TypographyDemo";

export const tabs = [
    {
        id: 1,
        title: 'Colors',
        component: <Colors />
    },
    {
        id: 2,
        title: 'Buttons',
        component: <ButtonsDemo />
    },
    {
        id: 3,
        title: 'Typography',
        component: <TypographyDemo />
    }
]