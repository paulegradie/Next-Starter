export interface ListItemProps extends React.HTMLProps<HTMLLIElement> {}

export const ListItem = ({ children, color = 'black', ...rest }: ListItemProps) => {
    return (
        <li style={{ color }} {...rest}>
            {children}
        </li>
    );
};
