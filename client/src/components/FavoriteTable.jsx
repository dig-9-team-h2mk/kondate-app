import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';

export default function FavoriteTable({ favoriteList, handleDeleteClick }) {
  return (
    <>
      <div>好きな食べ物</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">名前</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {favoriteList.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.favorite_food}</TableCell>
              <Button
                variant="outline"
                onClick={() => handleDeleteClick(row.id)}
              >
                <Trash2 />
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
