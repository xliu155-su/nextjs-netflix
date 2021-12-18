import styles from './btngroup.module.scss'

const BtnGroup = ({children}) => {
    return <div class={styles.btn_group}>
        {children}
    </div>
}
export default BtnGroup