import { useEffect, useState } from 'react';
import { Link, useLocation } from '@remix-run/react';

// material-ui
import { Box, Grid, Tab, Tabs } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { useDispatch } from 'store';
import { openDrawer } from 'store/slices/menu';
import { getUserStory, getUserStoryOrder, getProfiles, getComments, getItems, getColumns, getColumnsOrder } from 'store/slices/api/kanban';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

// ==============================|| APPLICATION - KANBAN ||============================== //

export default function KanbanPage({ children }) {
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    let selectedTab = 0;
    switch (pathname) {
        case '/app/kanban/backlogs':
            selectedTab = 1;
            break;
        case '/app/kanban/board':
        default:
            selectedTab = 0;
    }

    const [value, setValue] = useState(selectedTab);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        // hide left drawer when email app opens
        dispatch(openDrawer(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const dataFetch = async () => {
        await dispatch(getItems());
        await dispatch(getColumns());
        await dispatch(getColumnsOrder());
        await dispatch(getProfiles());
        await dispatch(getComments());
        await dispatch(getUserStory());
        await dispatch(getUserStoryOrder());
    }

    useEffect(() => {
        dataFetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <Grid container>
                <Grid item xs={12}>
                    <MainCard contentSX={{ p: 2 }}>
                        <Tabs
                            value={value}
                            variant="scrollable"
                            onChange={handleChange}
                            sx={{
                                px: 1,
                                pb: 2,
                                '& a': {
                                    minWidth: 10,
                                    px: 1,
                                    py: 1.5,
                                    mr: 2.25,
                                    color: 'grey.600',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                },
                                '& a.Mui-selected': {
                                    color: 'primary.main'
                                },
                                '& a > svg': {
                                    marginBottom: '0px !important',
                                    mr: 1.25
                                }
                            }}
                        >
                            <Tab
                                sx={{ textTransform: 'none' }}
                                component={Link}
                                to="/app/kanban/board"
                                label={value === 0 ? 'Board' : 'View as Board'}
                                {...a11yProps(0)}
                            />
                            <Tab
                                sx={{ textTransform: 'none' }}
                                component={Link}
                                to="/app/kanban/backlogs"
                                label={value === 1 ? 'Backlogs' : 'View as Backlog'}
                                {...a11yProps(1)}
                            />
                        </Tabs>

                        {children}
                    </MainCard>
                </Grid>
            </Grid>
        </Box>
    );
}
