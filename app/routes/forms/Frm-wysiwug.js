// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

// project imports
import Layout from 'layout';
import LAYOUT from 'constant';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import ReactDraftWysiwyg from 'components/forms/plugins/Wysiwug/ReactDraftWysiwyg.client';
import ReactQuillDemo from 'components/forms/plugins/Wysiwug/ReactQuill.client';
import { useSelector } from 'store';

// assets

// ==============================|| PLUGIN - EDITORS ||============================== //

const WysiwygEditor = () => {
    const theme = useTheme();

    const { drawerOpen } = useSelector((state) => state.menu);

    return (
        <Layout variant={LAYOUT.main}>
            <MainCard
                title="Wysiwyg Editor"
                secondary={
                    <SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://www.npmjs.com/package/react-draft-wysiwyg" />
                }
            >
                <Grid container spacing={gridSpacing}>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            '& .rdw-dropdown-carettoopen, .rdw-dropdown-carettoclose': {
                                right: '10% !important',
                                left: 'unset'
                            },
                            '& .rdw-emoji-modal': {
                                right: drawerOpen ? '-223px' : '5px',
                                left: 'unset',
                                [theme.breakpoints.down('sm')]: {
                                    right: '-84px !important',
                                    left: 'unset'
                                },
                                [theme.breakpoints.down('md')]: {
                                    right: '5px',
                                    left: 'unset'
                                }
                            },
                            '& .rdw-colorpicker-modal': {
                                right: '5px !important',
                                left: 'unset'
                            },
                            '& .rdw-link-modal': {
                                right: drawerOpen ? '-180px' : '46px',
                                left: 'unset',
                                [theme.breakpoints.down('sm')]: {
                                    right: '-174px !important',
                                    left: 'unset'
                                },
                                [theme.breakpoints.down('md')]: {
                                    right: '-180px',
                                    left: 'unset'
                                }
                            },
                            '& .rdw-image-modal': {
                                right: drawerOpen ? '-223px' : '5px',
                                left: 'unset',
                                [theme.breakpoints.down('sm')]: {
                                    right: '-39px !important',
                                    left: 'unset'
                                },
                                [theme.breakpoints.down('md')]: {
                                    right: '-39px',
                                    left: 'unset'
                                }
                            },
                            '& .rdw-embedded-modal': {
                                right: drawerOpen ? '-223px' : '5px',
                                left: 'unset',
                                [theme.breakpoints.down('sm')]: {
                                    right: '-129px !important',
                                    left: 'unset'
                                },
                                [theme.breakpoints.down('md')]: {
                                    right: '-180px',
                                    left: 'unset'
                                }
                            },
                            '& .rdw-editor-wrapper': {
                                bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : theme.palette.background.paper,
                                border: '1px solid',
                                borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.light + 20 : 'primary.light',
                                borderRadius: '12px',
                                '& .rdw-editor-main': {
                                    px: 2,
                                    py: 0.5,
                                    border: 'none'
                                },
                                '& .rdw-editor-toolbar': {
                                    pt: 1.25,
                                    border: 'none',
                                    borderBottom: '1px solid',
                                    borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.light + 20 : 'primary.light',
                                    bgcolor: theme.palette.mode === 'dark' ? 'dark.light' : 'grey.50',
                                    '& .rdw-option-wrapper': {
                                        bgcolor: theme.palette.mode === 'dark' ? 'dark.light' : 'grey.50',
                                        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : 'grey.900'
                                    },
                                    '& .rdw-dropdown-wrapper': {
                                        bgcolor: theme.palette.mode === 'dark' ? 'dark.light' : 'grey.50',
                                        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : 'grey.900',
                                        '& .rdw-dropdown-selectedtext': {
                                            color: theme.palette.mode === 'dark' ? 'dark.dark' : 'grey.900'
                                        }
                                    }
                                }
                            }
                        }}
                    >
                        <Stack spacing={gridSpacing}>
                            <Typography variant="subtitle1">React Draft</Typography>
                            <ReactDraftWysiwyg />
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack
                            spacing={gridSpacing}
                            sx={{
                                '& .quill': {
                                    bgcolor: theme.palette.mode === 'dark' ? 'dark.main' : 'grey.50',
                                    borderRadius: '12px',
                                    '& .ql-toolbar': {
                                        bgcolor: theme.palette.mode === 'dark' ? 'dark.light' : 'grey.100',
                                        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.light + 20 : 'primary.light',
                                        borderTopLeftRadius: '12px',
                                        borderTopRightRadius: '12px'
                                    },
                                    '& .ql-container': {
                                        borderColor:
                                            theme.palette.mode === 'dark' ? `${theme.palette.dark.light + 20} !important` : 'primary.light',
                                        borderBottomLeftRadius: '12px',
                                        borderBottomRightRadius: '12px',
                                        '& .ql-editor': {
                                            minHeight: 135
                                        }
                                    }
                                }
                            }}
                        >
                            <Typography variant="subtitle1">React Quill</Typography>
                            <ReactQuillDemo />
                        </Stack>
                    </Grid>
                </Grid>
            </MainCard>
        </Layout>
    );
};

export default WysiwygEditor;
