import React, { useState } from 'react'
import './Policelogos.css'
import images from '../../images/images';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Policelogo = () => {
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
    <Container className="police-logo">
     <Row  md={4}>
     <Col className="img1" ><img src={images.dgp} alt={"111"}  onMouseEnter={() => setName1("It's director general of police /additional director general of police/special director general of police badge")} onMouseLeave={() => setName1("")}/><h5 className="app__center221">{name1}</h5></Col>
     <Col xs={6}  className="img2" ><img src={images.ig} alt={"112"}  onMouseEnter={() => setName2("inspector general of police badge")} onMouseLeave={() => setName2("")}/><h5 className="app__center221">{name2}</h5></Col>
     <Col className="img3" ><img src={images.dig} alt={"113"}  onMouseEnter={() => setName3("its deputy inspector general of police badge")} onMouseLeave={() => setName3("")}/><h5 className="app__center221">{name3}</h5></Col>
     <Col className="img4" ><img src={images.ssp} alt={"114"}  onMouseEnter={() => setName4("it's senior superintendent of police badge")} onMouseLeave={() => setName4("")}/><h5 className="app__center221">{name4}</h5></Col>
     </Row>
     <Row  md={4}>
     <Col className="img5" ><img src={images.sp} alt={"115"}  onMouseEnter={() => setName5("it's  superintendent of police badge")} onMouseLeave={() => setName5("")}/><h5 className="app__center221">{name5}</h5></Col>
     <Col xs={6}  className="img6" ><img src={images.adsp} alt={"116"}  onMouseEnter={() => setName6("it's additional superintendent of police badge")} onMouseLeave={() => setName6("")}/><h5 className="app__center221">{name6}</h5></Col>
     <Col className="img7" ><img src={images.asp} alt={"117"}  onMouseEnter={() => setName7("it's assistant superintendent of police badge")} onMouseLeave={() => setName7("")}/><h5 className="app__center221">{name7}</h5></Col>
     <Col className="img8" ><img src={images.dsp} alt={"118"}  onMouseEnter={() => setName8("it's deputy superintendent of police badge")} onMouseLeave={() => setName8("")}/><h5 className="app__center221">{name8}</h5></Col>
     </Row>
     <Row  md={4}>
     <Col className="img9" ><img src={images.inspector} alt={"119"}  onMouseEnter={() => setName9("it's inspector badge")} onMouseLeave={() => setName9("")}/><h5 className="app__center221">{name9}</h5></Col>
     <Col xs={6}  className="img10" ><img src={images.si} alt={"120"}  onMouseEnter={() => setName10("it's sub-inspector badge")} onMouseLeave={() => setName10("")}/><h5 className="app__center221">{name10}</h5></Col>
     <Col className="img11" ><img src={images.asi} alt={"121"}  onMouseEnter={() => setName11("it's Assistant sub-inspector badge")} onMouseLeave={() => setName11("")}/><h5 className="app__center221">{name11}</h5></Col>
     <Col className="img12" ><img src={images.constable} alt={"122"}  onMouseEnter={() => setName12("It's constable badge")} onMouseLeave={() => setName12("")}/><h5 className="app__center221">{name12}</h5></Col>
     </Row>
    
</Container>
  )
}

export default Policelogo;
