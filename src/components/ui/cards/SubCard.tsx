import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import { BaseCardProps } from '.';

// ==============================|| CUSTOM SUB CARD ||============================== //

const SubCard = forwardRef<HTMLDivElement, BaseCardProps>(
    ({ children, cardContent = true, contentClass, darkTitle, secondary, sx = {}, contentSX = {}, title, ...rest }, ref) => {
        const theme = useTheme();

        return (
            <Card
                ref={ref}
                sx={{
                    border: '1px solid',
                    borderColor: theme.palette.primary.light,
                    ':hover': {
                        boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                    },
                    ...sx
                }}
                {...rest}
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
                            borderColor: theme.palette.primary.light
                        }}
                    />
                )}

                {/* card content */}
                {cardContent && (
                    <CardContent sx={{ p: 2.5, ...contentSX }} className={contentClass || ''}>
                        {children}
                    </CardContent>
                )}
                {!cardContent && children}
            </Card>
        );
    }
);

export default SubCard;
