import { Container, Heading, Text, Button, Flex, Select } from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import { RiFileTextLine } from "react-icons/ri";
import { FaBookmark } from "react-icons/fa";
import '../components/CSS/styles.css'
import Footer from "../components/Footer/Footer";
export const RW = () => {
  const [remainingTime, setRemainingTime] = useState(30);

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
  // State to store selected options for each blank space
  const [options, setOptions] = useState({
    blank1: "",
    blank2: "",
    blank3: "",
    blank4: ""
  });

  // Handler function to update selected option for a specific blank space
  const handleOptionChange = (blank, value) => {
    setOptions(prevOptions => ({
      ...prevOptions,
      [blank]: value
    }));
  };
  const [difficultChecked, setDifficultChecked] = useState(false);
  const [myExamChecked, setMyExamChecked] = useState(false);

  // State for counts
  const [examCount, setExamCount] = useState(0);
  const [doneBeforeCount, setDoneBeforeCount] = useState(0);
  const [difficultCount, setDifficultCount] = useState(0);

  // Options for all blanks
  const allOptions = ["--selector--", "first", "suffered", "endure", "because", "enjoyed", "white", "on", "continent"];

  return (
    <div>
    <div className="topofrw">
     <Container className="topbarrw" margin={'0'}maxWidth={'100%'}>
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <RiFileTextLine size={24} style={{ marginRight: '10px'}} />
          <Text ml={'15px'} fontSize={'xl'} fontWeight={'800'}>Reading</Text>
        </Flex>
        <Heading as="h2" style={{ textAlign: "center", margin: "0 auto", textDecoration:"underline" }}> R & W Fill In the Blanks</Heading>
        <Text>{formatTime(remainingTime)}</Text>
      </Flex>
    </Container>
      <Container margin={'0'} bg={'#F0FFF0'} boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" color={'black'} width={'100%'} maxWidth={'100%'} padding={'20px'} marginBottom={'20px'}>
        <Text>
          There are some words missing in the following text. Please select the correct word in the drop-down box. Fill all the blanks to activate "Submit".
        </Text>
      </Container>
      
      <div style={{ fontFamily: "Montserrat", display: "flex", flexDirection: "column" }}>
  {/* Button container */}
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0" }}>
    {/* Left side */}
    <div style={{ display: "flex", alignItems: "center" }}>
      #2 (RWFIB)
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

<Container margin={'0'} width={'100%'} maxWidth={'100%'} padding={'20px 20px 50px 20px'}>
  <Text>
    Classical music competitions &nbsp; 
    <span className="select-container">
      <Select borderRadius={'0'} size='xs' value={options.blank1} onChange={e => handleOptionChange("blank1", e.target.value)}>
        {allOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>
    </span>
    &nbsp; performers against each other. Obviously, the most important &nbsp;  
    <span className="select-container">
      <Select borderRadius={'0'} size='xs' value={options.blank2} onChange={e => handleOptionChange("blank2", e.target.value)}>
        {allOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>
    </span>
    &nbsp; for judges is sound. But that &nbsp; 
    <span className="select-container">
      <Select borderRadius={'0'} size='xs' value={options.blank3} onChange={e => handleOptionChange("blank3", e.target.value)}>
        {allOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>
    </span>
    &nbsp; needs a new... hearing. Because a player's passion may be the best  &nbsp; 
    <span className="select-container">
      <Select borderRadius={'0'} size='xs' value={options.blank4} onChange={e => handleOptionChange("blank4", e.target.value)}>
        {allOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>
    </span>
    &nbsp; of victory. In a new study, nearly 200 novices to choose the winners of 10 <span className="select-container">
      <Select borderRadius={'0'} size='xs' value={options.blank4} onChange={e => handleOptionChange("blank4", e.target.value)}>
        {allOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>
    </span>
    &nbsp; music competitions. Some heared a music clip of the top three performances. Other saw a vedio with sound still others watched a silent video. And the participants were more likely to choose the winner if they watched the silent viedo, in all 10 of the competitions. Then professional musicians gave it atry. These judges also only reliabily selected the winners from the silent viedo. Musicians selected teh winner more  <span className="select-container">
      <Select borderRadius={'0'} size='xs' value={options.blank4} onChange={e => handleOptionChange("blank4", e.target.value)}>
        {allOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>
    </span>
    &nbsp; even when all they saw was an<span className="select-container">
      <Select borderRadius={'0'} size='xs' value={options.blank4} onChange={e => handleOptionChange("blank4", e.target.value)}>
        {allOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>
    </span>
    &nbsp;of the motion of the performers. The reserachers say the <span className="select-container">
      <Select borderRadius={'0'} size='xs' value={options.blank4} onChange={e => handleOptionChange("blank4", e.target.value)}>
        {allOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>
    </span>
    &nbsp;show that novices and experts make quick judgments about musical performance based on visual cues conveying involement and passion. The study was published in the Proceedings of the National Academy of Sciences. So next time you see a live concert, don't close your eyes to focus on the music. You might be missing the most important part.<span className="select-container">
      <Select borderRadius={'0'} size='xs' value={options.blank4} onChange={e => handleOptionChange("blank4", e.target.value)}>
        {allOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>
    </span>
    &nbsp;
  </Text>
</Container>

<Container margin={'0'} bg={'#00008B'} color={'white'} width={'100%'} maxWidth={'100%'} padding={'10px'} marginTop={'3%'}>
  <Flex justify="space-between" align="center">
    <Flex>
      <Button  className="downorderrw" variant="outline" color={'blue'} size="sm">Exit</Button>
      <Button className="downorderrw" variant="outline" color="blue" size="sm" ml={2}>Redo</Button>
    </Flex>
    <Flex>
      <Button className="downorderrw" variant="outline" color="blue" size="sm">Submit</Button>
      <Button className="downorderrw" variant="outline" color="blue"size="sm" ml={2}>Score</Button>
    </Flex>
    <Flex>
      <Button className="downorderrw" variant="outline" color="blue"  size="sm">Prev</Button>
      <Button className="downorderrw" variant="outline" color="blue" size="sm" ml={2}>Next</Button>
    </Flex>
  </Flex>
</Container>
    </div>
    <Footer/>
    </div>
  );
};
