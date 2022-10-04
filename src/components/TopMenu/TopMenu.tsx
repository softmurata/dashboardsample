import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material"
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';


export default function TopMenu() {
    return (
        <Box sx={{ 
            flexGrow: 1
            }}>
            <AppBar position="static" className="bg-gradient-primary">
                 <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <SportsSoccerIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ 
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                        }}>
                        Sports
                    </Typography>
                    {/*<Button color="inherit">Login</Button>*/}
                </Toolbar>
            </AppBar>
        </Box>
    )
}