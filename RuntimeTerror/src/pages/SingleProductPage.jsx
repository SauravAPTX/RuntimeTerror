// import React ,{useState}from "react";
// import { useParams } from "react";
// import {Card, CardFooter, Image, Button} from "@nextui-org/react";
// const SingleProductPage=()=>{
//   const[data,setData]=useState({})
//   const {id}=useParams();
//   console.log("x",id);
//   const api="";
//   async function fetchData(){

//     let res= await fetchData(`${api}/${id}`)
//     let data1=await res.json();
//     console.log(data1.data,"data");
//     setData(data1.data,"data")

//   }
// }
// fetchData() 
//   return (
//     <Box>
//     <Card
//       isFooterBlurred
//       radius="lg"
//       className="border-none"
//     >
//      <Image src={data.img} borderRadius="lg" />
//       <Heading size="md">{data.brand}</Heading>
//       <Text>{data.details}</Text>
//       <Text color="blue.600" fontSize="2xl">
//               {data.price}
//             </Text>
//       <CardFooter>
//           <ButtonGroup spacing="2">
//             <Button variant="solid" colorScheme="blue">
//               Buy now
//             </Button>
//             {/* <Button onClick={nav} variant="ghost" colorScheme="blue">
//               Details
//             </Button> */}
//           </ButtonGroup>
//         </CardFooter>
//     </Card>
//     </Box>
//   );
import React from 'react'

const SingleProductPage = () => {
  return (
    <div>SingleProductPage</div>
  )
}

export default SingleProductPage