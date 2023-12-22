import React from 'react';
import { Container, Row, Col, ListGroup  } from 'react-bootstrap';
import GitHub from "../assert/icons/github.png";
import Replit from "../assert/icons/replit.png"

function Contact() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <div>
            <h2>Позвольте мне представиться.</h2>
            <p>
              Позвольте представиться. Моя страсть к программированию стала источником вдохновения, и, на мой взгляд, я уже достиг определенного уровня в этой области...
              <br/>
              <br/>
              Я в владею классическими языками, такими как CSS, Javascript и HTML.
              <br/>
              <br/>
              Мои основные интересы связаны с созданием новых веб-технологий и продуктов, а также с областями.
              <br/>
              <br/>
              Когда у меня есть возможность, я также с удовольствием воплощаю свою страсть к разработке продуктов с использованием Node.js и современных библиотек и фреймворков на JavaScript, таких как React.js.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
          <Col md={6} className="home-about-social">
            <h2>Найди меня в сети</h2>
            <p>
              Не стесняйся связаться со мной
            </p>
            <ListGroup horizontal className="home-about-social-links">
              <ListGroup.Item className="border-0">
                <a
                  href="https://github.com/NewSarcasmProvider"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={GitHub}
                    alt="GitHub"
                    style={{ width: '25px', height: '25px' }}
                  />
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <a
                  href="https://replit.com/@CrazyCat2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Replit}
                    alt="Replit"
                    style={{ width: '25px', height: '25px' }}
                  />
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
    </Container>
  );
}

export default Contact;
