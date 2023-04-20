import Card from 'react-bootstrap/Card';

function Tarjeta({ src, title, description }) {
    return (
        <div className='Cards'>
            <Card style={{ width: '30rem' }} >
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <Card.Title><strong>{title}</strong></Card.Title>
                    <hr />
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Tarjeta;