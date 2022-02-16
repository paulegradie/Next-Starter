import { Text } from '@components/common/text/Text';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import cls from './BrandName.module.scss';

export const BrandName = ({ className }: { className?: string }) => {
    const router = useRouter();

    return (
        <div className={classnames(cls.logowrap, className)}>
            <div className={cls.logotypography} onClick={() => router.push('/')}>
                <Text variant="h1" className={cls.brandText} display="inline">
                    PlaceHolder
                </Text>
            </div>
        </div>
    );
};
