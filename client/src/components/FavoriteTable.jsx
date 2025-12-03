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

export default function FavoriteTable({ favoriteList }) {
  return (
    <>
      <div>好きな食べ物</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>名前</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {favoriteList.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.favorite_food}</TableCell>
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
