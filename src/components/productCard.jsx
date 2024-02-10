import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          sx={{
            borderRadius: "10px",
            margin: "8px",
            marginBottom: "0px",
          }}
          component="div"
        >
          <img
            width={"100%"}
            height={"240px"}
            src={props.image}
            alt="product image"
          />
        </CardMedia>
        <CardContent sx={{ pt: "0px", px: "10px" }}>
          <Typography
            textTransform={"capitalize"}
            gutterBottom
            variant="p"
            component="div"
          >
            {props.title}
          </Typography>
          <Typography variant="p" color="text.secondary">
            AED{"  "}
            <Typography
              fontWeight={"bold"}
              color={"black"}
              fontSize={"18px"}
              variant="span"
            >
              {props.price}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
