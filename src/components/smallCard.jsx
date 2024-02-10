import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard(props) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        backgroundColor: "whitesmoke",
        boxShadow: "none",
        width: 180,
      }}
    >
      <CardMedia
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 120,
        }}
        title="product image"
      >
        <img height={"100px"} width={"80px"} src={props.image} />
      </CardMedia>
      <CardContent
        sx={{
          backgroundColor: "#ececec",
          height: 60,
          py: 0.4,
          px: 1.5,
        }}
      >
        <Typography
          textTransform={"capitalize"}
          fontSize={"12px"}
          gutterBottom
          variant="p"
          component="div"
          fontWeight={"bold"}
          color={"#575757"}
        >
          {props.text}
        </Typography>
        <Typography fontWeight={"bold"} fontSize={"16px"} variant="p">
          {props.price} AED
        </Typography>
      </CardContent>
    </Card>
  );
}
