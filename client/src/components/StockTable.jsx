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

export default function StockTable({ stockList }) {
  return (
    <>
      <div>冷蔵庫の食べ物</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>名前</TableHead>
            <TableHead>g</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stockList.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.food_name}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>
                <button>×</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
