import {Button, Badge , Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons'

const Item = ({data, index, functions}) => {
    return (
        <>
            <Container className="d-flex flex-row">
                <Badge variant="primary" className="p-2 mx-2">
                    <h3> {data.counter} </h3>
                </Badge>

                <Button
                    variant="secondary"
                    className="mx-2 text-white"
                    onClick={() => functions.increment(index)}
                >
                    <FontAwesomeIcon icon={faPlus} className="ml-2"/>
                </Button>

                <Button
                    variant="info"
                    className="mx-2 text-white"
                    disabled={data.counter === 0}
                    onClick={() => functions.decrement(index)}
                >
                    <FontAwesomeIcon icon={faMinus} className="ml-2"/>
                </Button>

                <Button
                    variant="danger"
                    className="mx-2 text-white"
                    onClick={() => {functions.remove(index)}}
                >
                    <FontAwesomeIcon icon={faTrash} className="ml-2"/>
                </Button>
            </Container>
        </>
    )
}


export default Item