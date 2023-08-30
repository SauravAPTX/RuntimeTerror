import React ,{useState}from "react";
import { useParams } from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const SingleProductPage = () => {
  const {id}= useParams; //returns an object
  const [ProductData, setProductData] = useState({});
  useEffect(() => {
  async function fetchD() {
      let res = await fetch(`${api}/${id}`);
      let data = await res.json();
      setProductData(data);
      console.log(data,"data");
  }
  fetchD();
  }, []);
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">yellowq{ProductData.title}</h4>
        <small className="text-default-500">{ProductData.price}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={ProductData.img}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
export default SingleProductPage;