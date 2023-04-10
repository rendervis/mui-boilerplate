import { ForwardedRef, ReactNode, RefObject, forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography, CardProps as MuiCardProps } from '@mui/material';

import { BaseCardProps } from '.';
// constant
const headerSX = {
    '& .MuiCardHeader-action': { mr: 0 }
};

type MainCardProps = MuiCardProps & BaseCardProps;

// ==============================|| CUSTOM MAIN CARD ||============================== //

const MainCard = forwardRef<HTMLDivElement, MainCardProps>(
    (
        {
            border = true,
            boxShadow,
            children,
            cardContent = true,
            contentClass = '',
            contentSX = {},
            darkTitle,
            secondary,
            shadow,
            sx = {},
            title,
            ...rest
        },
        ref
    ) => {
        const theme = useTheme();

        return (
            <Card
                ref={ref}
                {...rest}
                sx={{
                    border: border ? '1px solid' : 'none',
                    borderColor: theme.palette.primary.main,
                    ':hover': {
                        boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
                    },
                    ...sx
                }}
            >
                {/* card header and action */}
                {title && (
                    <CardHeader
                        sx={headerSX}
                        title={darkTitle ? <Typography variant="h3">{title}</Typography> : title}
                        action={secondary}
                    />
                )}

                {/* content & header divider */}
                {title && <Divider />}

                {/* card content */}
                {cardContent && (
                    <CardContent sx={contentSX} className={contentClass}>
                        {children}
                    </CardContent>
                )}
                {!cardContent && children}
            </Card>
        );
    }
);

export default MainCard;
