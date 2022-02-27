import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { IoMoon, IoSunnySharp } from 'react-icons/io5'

function ToggleThemeButton() {
    const { toggleColorMode } = useColorMode()
    const Icon = useColorModeValue(IoMoon, IoSunnySharp)
    const iconColor = useColorModeValue('#24293E', '#F7B500')

    return (
        <IconButton onClick={toggleColorMode} aria-label="change theme" icon={<Icon color={iconColor} />}  />
    )
}

export default ToggleThemeButton