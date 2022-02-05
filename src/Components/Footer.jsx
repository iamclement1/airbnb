import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faFacebook, faInstagram, faGithub)

const Footer = () => {
    return (
    <div>
        <footer>
            <FontAwesomeIcon icon={twitter} />
        </footer>
    </div>
    )
}

export default Footer
