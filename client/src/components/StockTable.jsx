import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

export default function StockTable({ stockList, handleDeleteClick }) {
  return (
    <div>
      <div>冷蔵庫の食べ物</div>
      <Table className="table">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">名前</TableHead>
            <TableHead className="text-center">g</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stockList.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.food_name}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  onClick={() => handleDeleteClick(row.id)}
                >
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
