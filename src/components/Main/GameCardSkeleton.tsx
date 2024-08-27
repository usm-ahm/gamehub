import { Card, CardContent, CardMedia, Skeleton } from "@mui/material";

const GameCardSkeleton = () => {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardMedia>
        <Skeleton variant="rectangular" width={340} height={200} />
      </CardMedia>
      <CardContent sx={{ height: 100 }}>
        <Skeleton />
        <Skeleton />
      </CardContent>
    </Card>
  );
};

export default GameCardSkeleton;
