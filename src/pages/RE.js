import { Container, Heading, Text, Button, Flex } from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import { RiFileTextLine } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa";
import '../components/CSS/styles.css'
import Footer from "../components/Footer/Footer";
export const RE = () => {
  const [remainingTime, setRemainingTime] = useState(30)
  const [sourceParagraphs, setSourceParagraphs] = useState([
    "People with spare bedrooms would welcomes starngers into their homes and share resurant recommendations with them for a small fee.",
    "Fast forward to 2016 and the big, sucessful Airnb is Considered a mainstay of what we now call the sharing econommy.",
    "Back in 2008 a small company in San Francisco called Airbnb had a dream.",
    "It is also the business that defines the mentality of the millennial",
  ]);
  const [targetParagraphs, setTargetParagraphs] = useState([]);

  const [selectedSourceParagraph, setSelectedSourceParagraph] = useState(null);
  const [selectedTargetParagraph, setSelectedTargetParagraph] = useState(null);
  const moveParagraphToTarget = () => {
    if (selectedSourceParagraph) {
      setSourceParagraphs((prevSource) =>
        prevSource.filter((p) => p !== selectedSourceParagraph)
      );
      setTargetParagraphs((prevTarget) => [...prevTarget, selectedSourceParagraph]);
      setSelectedSourceParagraph(null);
    }
  };
  const moveParagraphToSource = () => {
    if (selectedTargetParagraph) {
      setTargetParagraphs((prevTarget) =>
        prevTarget.filter((p) => p !== selectedTargetParagraph)
      );
      setSourceParagraphs((prevSource) => [...prevSource, selectedTargetParagraph]);
      setSelectedTargetParagraph(null);
    }
  };
  
  // Update remaining time every second
  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(prevTime => prevTime - 1);
      }
    }, 1000);

    // Clean up timer
    return () => clearInterval(timer);
  }, [remainingTime]);

  // Function to format time as "MM:SS"
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };
  const [difficultChecked, setDifficultChecked] = useState(false);
  const [myExamChecked, setMyExamChecked] = useState(false);

  // State for counts
  const [examCount, setExamCount] = useState(0);
  const [doneBeforeCount, setDoneBeforeCount] = useState(0);
  const [difficultCount, setDifficultCount] = useState(0);

  return (
    <div>
    <div style={{ fontFamily: "Montserrat" }}>
     <Container margin={'0'} bg={'#00008B'} color={'white'} width={'100%'} maxWidth={'100%'} padding={'10px'}>
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <RiFileTextLine size={24} style={{ marginRight: '10px'}} />
          <Text ml={'15px'} fontSize={'xl'} fontWeight={'800'}>Reading</Text>
        </Flex>
        <Heading as="h2" style={{ textAlign: "center", margin: "0 auto", textDecoration:"underline" }}> Re-order Paragraph</Heading>
        <Text>{formatTime(remainingTime)}</Text>
      </Flex>
    </Container>
    <Container margin={'0'} bg={'#F0FFF0'} boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" color={'black'} width={'100%'} maxWidth={'100%'} padding={'20px'} marginBottom={'20px'}>
  <Text style={{fontSize:"12.9px",}}>
    The text boxes in the left panel have been placed in a random order. Restore the origional order by dragging the text boxes from left panel to the right panel. Move at least one paragraph to right to activate "Submit".
  </Text>
</Container>
      
      <div style={{ fontFamily: "Montserrat", display: "flex", flexDirection: "column" }}>
  {/* Button container */}
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0" }}>
    {/* Left side */}
    <div style={{ display: "flex", alignItems: "center" }}>
      #3 Airbnb (RP)
      <FaBookmark size={24} style={{ marginLeft: '5px',color:"#808080"}} />
    </div>
    {/* Right side */}
    <div style={{ display: "flex", alignItems: "center" }}>
      <Button variant="outline" colorScheme="white" bg={'royalblue'} size="sm" onClick={() => setExamCount((prev) => prev + 1)}>Exam Q({examCount})</Button>
      <Button variant="outline" colorScheme="white" bg={'royalblue'} size="sm" ml={2} onClick={() => setDoneBeforeCount((prev) => prev + 1)}>Done Before({doneBeforeCount})</Button>
      <Button variant="outline" colorScheme="white" bg={'#A9A9A9'} size="sm" ml={2} onClick={() => setDifficultCount((prev) => prev + 1)}>Difficult({difficultCount})</Button>
    </div>
  </div>
  {/* Next line */}
  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
    <label style={{ marginLeft: "5px", marginRight: "15px" }}>Difficult</label>
    <input type="checkbox" onChange={() => setDifficultChecked(!difficultChecked)} />
    <label style={{ marginLeft: "5px", marginRight: "15px"}}>My Exam</label>
    <input type="checkbox"  onChange={() => setMyExamChecked(!myExamChecked)} />
  </div>
</div>

<div style={{ fontFamily: "Montserrat" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Source Card */}
        <div style={{ border: "1px solid #ccc", padding: "10px", width: "45%", textAlign: "center" }}>
          <Heading fontSize={'25px'} backgroundColor="#00008B" color="white">Source</Heading>
          {sourceParagraphs.map((paragraph, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                backgroundColor: selectedSourceParagraph === paragraph ? "#efefef" : "transparent",
                cursor: "pointer"
              }}
              onClick={() => setSelectedSourceParagraph(paragraph)}
            >
              <Text>{paragraph}</Text>
            </div>
          ))}
        </div>

        {/* Middle Arrow Buttons */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            <Button style={{ backgroundColor: "red",color:"white" ,borderRadius:"50px"}} onClick={moveParagraphToTarget} disabled={!selectedSourceParagraph}>{">"}</Button>
          </div>
          <div style={{ marginTop: "10px" }}>
            <Button style={{ backgroundColor: "blue" ,color:"white" ,borderRadius:"50px"}} onClick={moveParagraphToSource} disabled={!selectedTargetParagraph}>{"<"}</Button>
          </div>
        </div>

        {/* Target Card */}
        <div style={{ border: "1px solid #ccc", padding: "10px", width: "45%", textAlign: "center" }}>
          <Heading fontSize={'25px'} backgroundColor="red" color="white">Target</Heading>
          {targetParagraphs.map((paragraph, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                backgroundColor: selectedTargetParagraph === paragraph ? "#efefef" : "transparent",
                cursor: "pointer"
              }}
              onClick={() => setSelectedTargetParagraph(paragraph)}
            >
              <Text>{paragraph}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>


    <Container margin={'0'} bg={'#00008B'} color={'white'} width={'100%'} maxWidth={'100%'} padding={'10px'} marginTop={'1%'}>
  <Flex justify="space-between" align="center">
    <Flex>
      <Button variant="outline" colorScheme="blue" bgColor={"white"} size="sm">Exit</Button>
      <Button variant="outline" colorScheme="blue"bgColor={"white"} size="sm" ml={2}>Redo</Button>
    </Flex>
    <Flex>
      <Button variant="outline" colorScheme="blue" bgColor={"white"} size="sm">Submit</Button>
      <Button variant="outline" colorScheme="blue"bgColor={"white"} size="sm" ml={2}>Score</Button>
    </Flex>
    <Flex>
      <Button variant="outline" colorScheme="blue" bgColor={"white"} size="sm">Prev</Button>
      <Button variant="outline" colorScheme="blue"bgColor={"white"} size="sm" ml={2}>Next</Button>
    </Flex>
  </Flex>
</Container>
    </div>
    <Footer/>
    </div>
  );
};
