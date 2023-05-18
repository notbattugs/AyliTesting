import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function HotelCard({ Title, Image, Location }) {
  return (
    <Card sx={{ minHeight: "280px", width: "300px" }}>
      <CardCover>
        <img src={Image} srcSet={Image} loading="lazy" alt="" />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
          {Title}
        </Typography>
        <Typography textColor="neutral.300">{Location} </Typography>
      </CardContent>
    </Card>
  );
}
