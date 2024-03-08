import React from "react"
import { Flex, useColorModeValue, Box, Text, Tabs, Tab, TabPanels, TabPanel, TabList } from "@chakra-ui/react"
import Card from "../components/Card/Card"
import CardBody from "../components/Card/CardBody"
import SearchTable2 from "../components/Tables/SearchTable2"
import Footer from "../components/Footer/Footer"
export const Speaking = () => {
  const tableData2 = [
    {
      "id": "#10421",
      "date": "1 Nov, 10:20 AM",
      "status": "Paid",
      "customer": "Sebastian Koga",
      "product": "Nike Sport V2",
      "revenue": "$23146"
    },
    {
      "id": "#10422",
      "date": "1 Nov, 10:53 AM",
      "status": "Paid",
      "customer": "Iryna Innda",
      "product": "Valvet T-shirt",
      "revenue": "$83133"
    },
    {
      "id": "#10423",
      "date": "1 Nov, 11:13 AM",
      "status": "Refunded",
      "customer": "Arrias Liunda",
      "product": "Nike Air Force",
      "revenue": "$48476"
    },
  ]
  const columnsData2 = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "DATE",
      accessor: "date",
    },
    {
      Header: "STATUS",
      accessor: "status",
    },
    {
      Header: "CUSTOMER",
      accessor: "customer",
    },
    {
      Header: "PRODUCT",
      accessor: "product",
    },
    {
      Header: "REVENUE",
      accessor: "revenue",
    },
  ];
  return (
    <div>
    <Flex direction='column' pt={{ sm: '125px', md: '20px' }}>
      <Text
        transition={'all .3s ease'}
        fontSize={'md'}
        fontWeight={700}
        mb={'20px'}
        ml={'20px'}>
        Summarize spoken text
      </Text>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        p={'20px 10px'}
        borderRadius={'10px'}
      >
        <Tabs>
          <TabList>
            <Tab>All</Tab>
            <Tab>Not practiced</Tab>
            <Tab>Exam Q</Tab>
            <Tab>Difficult</Tab>
            <Tab>Bookmarked</Tab>
            <Tab>Practiced</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Card px='0px'>
                <CardBody>
                  <SearchTable2 tableData={tableData2} columnsData={columnsData2} />
                </CardBody>
              </Card>
            </TabPanel>
            <TabPanel>Not practiced tab</TabPanel>
            <TabPanel>Exam Q tab</TabPanel>
            <TabPanel>Difficult tab</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
    <Footer/>
    </div>
  )
}