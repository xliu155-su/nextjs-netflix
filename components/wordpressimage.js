import Image from 'next/image'

import styles from './wordpressimage.module.scss'

const WordpressImage = ({ data }) => {
    const {sourceUrl, mediaDetails, altText } = data
    const { width, height } = mediaDetails
    
    return  <Image 
    src={sourceUrl}
    width={width}
    height={height}
    altText={altText}
    className={styles.responsize_img}
/>
}
export default WordpressImage

