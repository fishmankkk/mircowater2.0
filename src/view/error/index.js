import React from 'react'
import styles from './index.less'
import img404 from '../../public/images/404.gif'

const Error = () => (<div className="content-inner">
  <div className={styles.error}>
    <img src={img404} alt={'logo'} />
  </div>
</div>)

export default Error
