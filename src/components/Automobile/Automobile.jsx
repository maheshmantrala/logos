import React, { useState } from 'react'
import './Automobile.css'
import images from '../../images/images';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Automobile = () => {
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
    <Container className="auto-mobile">
     <Row  md={4}>
     <Col className="img1" ><img src={images.lamborgini}  onMouseEnter={() => setName1("It's lamborgini car logo.Bull which is present in this  logo represents cars power ,speed and prestige")} alt={"11"} onMouseLeave={() => setName1("")}/><h5 className="app__center1">{name1}</h5></Col>
     <Col  xs={6} className="img2" ><img src={images.az} onMouseEnter={() => setName2(" It's Acure car logo.this logo  representing in this  logo represents the meticulous attention to detail that goes into every acura")} alt={"12"}  onMouseLeave={() => setName2("")}/><h5 className="app__center1">{name2}</h5></Col>
     <Col className="img3" ><img src={images.bb} onMouseEnter={() => setName3("it is bentley car logo.Wings represents that W.O bentley's background as a designer of engines for fighter planes in the first world war.")} alt={"13"}  onMouseLeave={() => setName3("")}/><h5 className="app__center1">{name3}</h5></Col>
     <Col className="img4" ><img src={images.daewoo} onMouseEnter={() => setName4(" It is daewoo caer logo.the company adopted a stylish image of seashell.the seashell represents beginning and end of everything.")} alt={"14"}  onMouseLeave={() => setName4("")}/><h5 className="app__center1">{name4}</h5></Col>
     </Row>

     <Row  md={4}>
     <Col className="img5" ><img src={images.rolls} onMouseEnter={() => setName5("it is rolls royace car Logo.it is spirit of ecstasy.it means that grace,beauty and energy in the rolls royace car.")} alt={"15"}  onMouseLeave={() => setName5("")}/><h5 className="app__center1">{name5}</h5></Col>
     <Col  xs={6} className="img6" ><img src={images.jazwar} onMouseEnter={() => setName6("it is jaguar Logo.it represents “grace, elegance, performance, power, and the ambition to leap forward.”")} alt={"16"}  onMouseLeave={() => setName6("")}/><h5 className="app__center1">{name6}</h5></Col>
     <Col className="img7" ><img src={images.lagonda} alt={"166"}  onMouseEnter={() => setName7(" It is lagonda car Logo.Aston Martin Lagonda  named the company after the Shawnee settlement in modern-day Springfield, Ohio, the town of his birth")} onMouseLeave={() => setName7("")}/><h5 className="app__center1">{name7}</h5></Col>
     <Col className="img8" ><img src={images.maseratai} alt={"17"}  onMouseEnter={() => setName8("it is maserati car logo.it symbolizes mastery over the water's raw power.")} onMouseLeave={() => setName8("")}/><h5 className="app__center1">{name8}</h5></Col>
     </Row>

     <Row  md={4}>
     <Col className="img9" ><img src={images.nissan} alt={"18"}  onMouseEnter={() => setName9(" it is nissan car Logo.it mention to the land of the rising sun.")} onMouseLeave={() => setName9("")}/><h5 className="app__center1">{name9}</h5></Col>
     <Col  xs={6} className="img10" ><img src={images.oldsmobile} alt={"19"}  onMouseEnter={() => setName10("it is oldsmobile car Logo.it represents the iconic rocket–but turned horizontally and going “in a new direction” for Oldsmobile.")} onMouseLeave={() => setName10("")}/><h5 className="app__center1">{name10}</h5></Col>
     <Col className="img11" ><img src={images.skoda} alt={"20"}  onMouseEnter={() => setName11("it is skoda car logo.The lime flower in this logo is a symbol of Slavic nationality and freedom. ")} onMouseLeave={() => setName11("")}/><h5 className="app__center1">{name11}</h5></Col>
     <Col className="img12" ><img src={images.voltswagen} alt={"21"}  onMouseEnter={() => setName12("it is volkswagen car Logo.It consists of two letters- 'V' for volks i.e people and 'W' for wagen i.e car.")} onMouseLeave={() => setName12("")}/><h5 className="app__center1">{name12}</h5></Col>
     </Row>
    </Container>
  )
}

export default Automobile;
