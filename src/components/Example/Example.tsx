import React from 'react'
import styles from './Example.module.scss'
import ExampleId from '@/models/example'

export default function Example({id}:{id:number[]}){

    console.log(id)

    return(
        <div className={styles.wrapper}>
            {
                id.map(id => {
                    return(
                        <div key={id} className={styles.exampleCard}>{id}</div>
                    )
                })
            }
        </div>
    )
}