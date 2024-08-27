import { Card, CardContent, CardMedia, Skeleton } from "@mui/material";

const GameCardSkeleton = () => {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardMedia>
        <Skeleton variant="rectangular" height="225px" />
      </CardMedia>
      <CardContent>
        <Skeleton />
        <Skeleton />
      </CardContent>
    </Card>
  );
};

export default GameCardSkeleton;
