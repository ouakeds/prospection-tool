import * as React from 'react';
import Box from '@mui/material/Box';
import CustomAppBar from '../components/AppBar';
import MainContainer from '../components/MainContainer';
import CustomDrawer from '../components/Drawer';

interface DefaultLayoutInterface {
    children?: JSX.Element,
}

const DefaultLayout: React.FC<DefaultLayoutInterface> = ({children}) => {

    const navigations = [
        { label: 'Dashboard', link: '/'},
        { label: 'Clients', link: '/customers'},
        { label: 'Contrats', link: '/contracts'},
    ]

    return (
        <Box sx={{ display: 'flex' }}>
            <CustomAppBar/>
            <CustomDrawer navigations={navigations}/>
            <MainContainer>
                {children}
            </MainContainer>
        </Box>
    );
}

export default DefaultLayout;