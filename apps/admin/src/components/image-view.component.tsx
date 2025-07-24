import {
  Card,
  CardMedia,
  Dialog,
} from "@mui/material";
import { useState } from "react";

interface ImageViewProps {
  uri: string;
  alt: string;
}
const ImageView = (props: ImageViewProps) => {
  const [showZoom, setShowZoom] = useState(false);
  return (
    <>
      <Card sx={{ width: "100%" }}>
        <CardMedia
          component="img"
          src={props.uri}
          alt={props.alt}
          onClick={() => setShowZoom(true)}
        />
      </Card>
      <Dialog
        open={showZoom}
        onBackdropClick={() => setShowZoom(false)}
      >
        <img
          src={props.uri}
          alt={props.alt}
          onClick={() => setShowZoom(false)}
        />
      </Dialog>
    </>
  );
};

export default ImageView;
