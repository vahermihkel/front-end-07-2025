import Carousel from 'react-bootstrap/Carousel';

function KarusellGalerii() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className=""
          src="https://cdn.midjourney.com/62293a4c-4eb9-4624-b853-a1174687b7bc/0_2.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src="https://cdn.midjourney.com/ce957435-bc2b-4197-9d89-25083945c929/0_3.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src="https://cdn.midjourney.com/fde1e7d9-43e3-436a-8ff0-88dbc9e7ab53/0_0.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default KarusellGalerii;