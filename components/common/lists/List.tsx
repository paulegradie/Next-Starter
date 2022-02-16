export interface ListProps extends React.HTMLProps<HTMLUListElement> {
    children?: React.ReactNode;
    paddingLeft?: string;
    paddingBottom?: string;
}

export const List = ({ children, paddingLeft = '1.5rem', paddingBottom = '1.5rem', ...rest }: ListProps) => {
    return (
        <ul style={{ paddingLeft, paddingBottom }} {...rest}>
            {children}
        </ul>
    );
};
