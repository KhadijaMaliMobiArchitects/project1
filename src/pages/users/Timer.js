import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value / 60)}:${props.value % 60 < 10 ? "0" : ""}${
          props.value % 60
        }`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularTimer() {
  const [progress, setProgress] = React.useState(8 * 60);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => prevProgress - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {progress > 0 ? (
        <CircularProgressWithLabel value={progress} />
      ) : (
        <Typography variant="h6" align="center">
          Time's up!
        </Typography>
      )}
    </>
  );
}
