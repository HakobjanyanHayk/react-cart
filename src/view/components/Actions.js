import {Container, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faRecycle } from '@fortawesome/free-solid-svg-icons'

const Actions = ({functions, isDisabled}) => {
    return (
        <Container>
            <Button
                variant="success"
                className='mx-1'
                onClick={() => {functions.setRefreshAll(true)}}
            >
                <span className='mx-1'>Refresh members</span>
                <FontAwesomeIcon icon={faSync} className="ml-2"/>
            </Button>

            <Button
                variant="info"
                className='text-white mx-1'
                disabled={isDisabled}
                onClick={functions.restoreItems}
            >
                <span className='mx-1'>Restore</span>
                <FontAwesomeIcon icon={faRecycle} className="ml-2"/>
            </Button>

        </Container>
        )
}

export default Actions;