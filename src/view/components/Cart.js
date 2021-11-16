import { Badge, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Cart = ({counter}) => {
    return (
        <Container className="d-flex flex-row align-items-center">
            <FontAwesomeIcon icon={faShoppingCart} />
            <Badge
                bg="info"
                className="rounded px-3 mx-2 d-flex flex-row align-items-center justify-content-center"
            >
                {counter}
            </Badge>
            <h4>Items</h4>
        </Container>
    )
}


export default Cart;