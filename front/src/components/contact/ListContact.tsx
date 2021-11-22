import React from 'react'
import { Media } from '../../context/profile/ProfileModel'

const ListContact = ({media}:{media:Media}) => {
    return (
        <ul>
            <li>{media.description}</li>
            <li>{media.contact}</li>
        </ul>
    )

}

export default ListContact;