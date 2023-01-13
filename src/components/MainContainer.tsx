import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

interface MainContainerInterface {
    children?: JSX.Element
}

const MainContainer: React.FC<MainContainerInterface> = ({children}) => {
    return (
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
            <Toolbar />
            {children}
        </Box>
    )
}

export default MainContainer;