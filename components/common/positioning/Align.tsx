import classnames from 'classnames';
import React from 'react';

type Directions = 'flex-start' | 'flex-end' | 'center';

export interface IAlign {
    children: React.ReactNode;
    direction?: Directions;
    float?: 'left' | 'right';
    verticalCenter?: boolean;
    extraClassNames?: string;
    orientation?: 'row' | 'column';
}

export type StyleProps = {
    direction: Directions;
    float?: 'left' | 'right';
    verticalCenter?: boolean;
    orientation: 'row' | 'column';
};

const assembleClassNames = ({ direction, float, verticalCenter, orientation }: StyleProps) => {
    let styles = {};

    styles['display'] = 'flex';

    if (orientation !== undefined) {
        styles['flexDirection'] = orientation;
    }

    if (direction !== undefined) {
        styles['justifyContent'] = direction;
    }

    if (verticalCenter !== undefined && verticalCenter === true) {
        styles['alignItems'] = 'center';
    }

    if (float !== undefined) {
        styles['float'] = float;
    }
    return styles;
};

export const Align = ({
    direction = 'center',
    float,
    orientation = 'row',
    verticalCenter,
    extraClassNames,
    children,
}: IAlign) => {
    const styles = assembleClassNames({ direction, float, verticalCenter, orientation });
    return (
        <div className={classnames(extraClassNames)} style={styles}>
            {children}
        </div>
    );
};
