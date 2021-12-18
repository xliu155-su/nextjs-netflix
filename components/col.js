import className from 'classnames/bind'

import styles from './col.module.scss'

let cx = className.bind(styles)

const Col = ({children, xs, sm, md, lg}) => {
    let colClasses = cx({
        col : true,
        [`col-xs-${xs}`] : xs,
        [`col-sm-${sm}`] : sm,
        [`col-md-${md}`] : md,
        [`col-lg-${lg}`] : lg,
    });
    return <div className={colClasses}>{children}</div>
}
export default Col