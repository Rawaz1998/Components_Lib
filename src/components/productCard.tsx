import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

const ProductCard = () => {
  return (
    <Card className="bg-background max-w-[350px]">
      <CardHeader>
        <Badge className="mb-2">Top Seller</Badge>
        <CardTitle>Product Name</CardTitle>
        <CardDescription>Product Description</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 items-start justify-center">
        <img
          src="https://png.pngtree.com/png-vector/20190214/ourmid/pngtree-vector-gallery-icon-png-image_515223.jpg"
          alt=""
          className="object-contain"
        />
        <span className="font-bold">119.99$</span>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button>Add to Cart</Button>
        <Button variant={"outline"} size={"icon"}>
          <Star />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
