import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

// ==============================|| CUSTOM SUB CARD ||============================== //

// eslint-disable-next-line react/display-name
const SubCard = React.forwardRef(
    ({ children, className, content, contentClass, darkTitle, secondary, sx = {}, contentSX = {}, title, ...others }, ref) => {
        const theme = useTheme();

        return (
            <Card
                ref={ref}
                sx={{
                    border: '1px solid',
                    borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.light + 15 : theme.palette.grey[200],
                    ':hover': {
                        boxShadow: theme.palette.mode === 'dark' ? '0 2px 14px 0 rgb(33 150 243 / 10%)' : '0 2px 14px 0 rgb(32 40 45 / 8%)'
                    },
                    ...sx
                }}
                {...others}
            >
                {/* card header and action */}
                {!darkTitle && title && (
                    <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h5">{title}</Typography>} action={secondary} />
                )}
                {darkTitle && title && (
                    <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h4">{title}</Typography>} action={secondary} />
                )}

                {/* content & header divider */}
                {title && (
                    <Divider
                        sx={{
                            opacity: 1,
                            borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.light + 15 : theme.palette.grey[200]
                        }}
                    />
                )}

                {/* card content */}
                {content && (
                    <CardContent sx={{ p: 2.5, ...contentSX }} className={contentClass || ''}>
                        {children}
                    </CardContent>
                )}
                {!content && children}
            </Card>
        );
    }
);

SubCard.defaultProps = {
    content: true
};

export default SubCard;
