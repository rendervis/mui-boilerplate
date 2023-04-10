export interface ThemeCustom {
    gridSpacing: number;
    drawerWidth: number;
    appDrawerWidth: number;
    borderRadius: number;
    customInput: {
        marginTop: number | string;
        marginBottom: number | string;
        '& > label': {
            top: number | string;
            left: number | string;
            color: string;
            '&[data-shrink="false"]': {
                top: number | string;
            };
        };
        '& > div > input': {
            padding: string;
        };
        '& legend': {
            display: string;
        };
        '& fieldset': {
            top: number | string;
        };
    };
    mainContent: {
        backgroundColor: string;
        width: string;
        minHeight: string;
        flexGrow: number;
        padding: string;
        marginTop: string;
        marginRight: string;
        borderRadius: string;
    };
    menuCaption: {
        fontSize: string;
        fontWeight: number;
        color: string;
        padding: string;
        textTransform: string;
        marginTop: string;
    };
    subMenuCaption: {
        fontSize: string;
        fontWeight: number;
        color: string;
        textTransform: string;
    };
    commonAvatar: {
        cursor: string;
        borderRadius: string;
    };
    smallAvatar: {
        width: string;
        height: string;
        fontSize: string;
    };
    mediumAvatar: {
        width: string;
        height: string;
        fontSize: string;
    };
    largeAvatar: {
        width: string;
        height: string;
        fontSize: string;
    };
}
