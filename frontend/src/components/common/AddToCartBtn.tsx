import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import type { AppDispatch } from "src/store/store";
import { addItem } from "@/features/cart/cartSlice";

type AddToCartBtnProps = {
  className: string;
  itemId: number | string;
};

const AddToCartBtn = ({ className, itemId }: AddToCartBtnProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(addItem(itemId.toString()));
  };
  return (
    <Button onClick={handleAddToCart} className={className}>
      Add to Cart
    </Button>
  );
};
export default AddToCartBtn;
