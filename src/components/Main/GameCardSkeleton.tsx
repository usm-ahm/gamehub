import { Card, CardContent, CardMedia, Skeleton } from "@mui/material";

const GameCardSkeleton = () => {
  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardMedia>
        <Skeleton variant="rectangular" sx={{ width: 400, height: 200 }} />
      </CardMedia>
      <CardContent sx={{ height: 100 }}>
        <Skeleton />
        <Skeleton />
      </CardContent>
    </Card>
  );
};

export default GameCardSkeleton;
