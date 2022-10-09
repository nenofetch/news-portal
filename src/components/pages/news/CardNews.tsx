import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function CardNews() {
  return (
    <div className="container">
      <CardHeader
        color="white"
        className="text-left relative text-blue-500 font-bold"
      >
        Berita Terkini
      </CardHeader>

      <div className="button flex lg:flex">
        <Card className="max-w-lg w-100 lg:max-w-100 lg:flex md: relative">
          <CardHeader color="gray" className="relative ">
            <img src="/src/assets/img.svg" alt="cardNews unavailable" />
          </CardHeader>
          <CardBody className="relative">
            <Typography>Text News</Typography>
          </CardBody>
        </Card>
        <Card className="max-w-lg w-100 lg:max-w-100 lg:flex">
          <CardHeader color="blue" className="relative ">
            <img src="/src/assets/img.svg" alt="cardNews unavailable" />
          </CardHeader>
          <CardBody className="relative">
            <Typography>Text News</Typography>
          </CardBody>
        </Card>

        <Card className="max-w-lg w-100 lg:max-w-100 lg:flex">
          <CardHeader color="blue" className="relative ">
            <img src="/src/assets/img.svg" alt="cardNews unavailable" />
          </CardHeader>
          <CardBody className="relative">
            <Typography>Text News</Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default CardNews;
