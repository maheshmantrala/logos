import React, { useState } from 'react'
import './Header.css';
import images from '../../images/images';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
  const [name1, setName1] = useState("")
  const [name2, setName2] = useState("")
  const [name3, setName3] = useState("")
  const [name4, setName4] = useState("")
  const [name5, setName5] = useState("")
  const [name6, setName6] = useState("")
  const [name7, setName7] = useState("")
  const [name8, setName8] = useState("")
  const [name9, setName9] = useState("")
  const [name10, setName10] = useState("")
  const [name11, setName11] = useState("")
  const [name12, setName12] = useState("")
  return (
    <>
      <Container className="app-con">
        <Row md={4} >
          <Col className="img1" ><img src={images.reactlogo} alt={"1"}  onMouseEnter={() => setName1(" React Logo")} onMouseLeave={() => setName1("")} /><h5 className="app__center">{name1}</h5></Col>
          <Col xs={6} className="img2"><img src={images.angular}  alt={"2"} onMouseEnter={() => setName2(" Angular Logo")} onMouseLeave={() => setName2("")}  /><h5 className="app__center">{name2}</h5></Col>
          <Col className="img3"><img src={images.chatgpt}  alt={"3"} onMouseEnter={() => setName3(" Chatgpt Logo")} onMouseLeave={() => setName3("")}/><h5 className="app__center">{name3}</h5> </Col>
          <Col className="img4"> <img src={images.vuee}  alt={"4"} onMouseEnter={() => setName4(" Vue Logo")} onMouseLeave={() => setName4("")} /><h5 className="app__center">{name4}</h5> </Col>

        </Row>

        <Row md={4}>
          <Col className="img5"><img src={images.adobe}  alt={"5"} onMouseEnter={() => setName5(" Adobe Logo")} onMouseLeave={() => setName5("")} /><h5 className="app__center">{name5}</h5> </Col>
          <Col xs={6} className="img6"><img src={images.figma}  alt={"6"} onMouseEnter={() => setName6("Figma Logo")} onMouseLeave={() => setName6("")}   /><h5 className="app__center">{name6}</h5> </Col>
          <Col className="img7"><img src={images.inlogo}  alt={"7"} onMouseEnter={() => setName7(" Invision Logo")} onMouseLeave={() => setName7("")}  /><h5 className="app__center">{name7}</h5> </Col>
          <Col className="img8"><img src={images.spring}  alt={"8"} onMouseEnter={() => setName8(" Spring Logo")} onMouseLeave={() => setName8("")}  /><h5 className="app__center">{name8}</h5> </Col>

        </Row>

        <Row md={4}>
          <Col className="img9"><img src={images.autoai}  alt={"9"} onMouseEnter={() => setName9(" Autoai Logo")} onMouseLeave={() => setName9("")}  /><h5 className="app__center">{name9}</h5> </Col>
          <Col xs={6} className="img10"><img src={images.axureicon}  alt={"10"} onMouseEnter={() => setName10(" Axure Logo")} onMouseLeave={() => setName10("")}  /><h5 className="app__center">{name10}</h5> </Col>
          <Col className="img11"><img src={images.my}  alt={"11"} onMouseEnter={() => setName11(" Pytorch Logo")} onMouseLeave={() => setName11("")}  /><h5 className="app__center">{name11}</h5> </Col>
          <Col className="img12"><img src={images.tensorflow}  alt={"12"} onMouseEnter={() => setName12(" Tensorflow Logo")} onMouseLeave={() => setName12("")}  /><h5 className="app__center">{name12}</h5> </Col>

        </Row>
      </Container>



    </>
  )
}

export default Header
